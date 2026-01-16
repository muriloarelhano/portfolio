import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

export const supportedLocales = ['pt-BR', 'en-US'] as const;
export type Locale = (typeof supportedLocales)[number];

const fallbackLocale: Locale = 'pt-BR';
const storageKey = 'locale';

type MessageValue = string | string[];
type Messages = Record<string, MessageValue>;

const localeLoaders = import.meta.glob('/src/locales/*/*.json') as Record<
	string,
	() => Promise<{ default: Record<string, MessageValue> }>
>;
const fallbackLoaders = import.meta.glob('/src/locales/pt-BR/*.json', { eager: true });
const messagesCache = new Map<Locale, Messages>();

const mergeMessages = (entries: Array<MessageValue | Record<string, MessageValue>>): Messages => {
	return entries.reduce<Messages>((acc, entry) => {
		if (Array.isArray(entry) || typeof entry === 'string') {
			return acc;
		}
		return { ...acc, ...entry };
	}, {});
};

const fallbackMessages = mergeMessages(
	Object.values(fallbackLoaders).map((module) =>
		(module as { default: Record<string, MessageValue> }).default
	)
);

const messages = writable<Messages>(fallbackMessages);
export const locale = writable<Locale>(fallbackLocale);
messagesCache.set(fallbackLocale, fallbackMessages);

const normalizeLocale = (value?: string | null): Locale => {
	if (!value) return fallbackLocale;
	const normalized = value.replace('_', '-');
	const exact = supportedLocales.find((locale) => locale.toLowerCase() === normalized.toLowerCase());
	if (exact) return exact;

	const base = normalized.split('-')[0]?.toLowerCase();
	if (base === 'pt') return 'pt-BR';
	if (base === 'en') return 'en-US';

	return fallbackLocale;
};

const detectLocale = (): Locale => {
	if (!browser) return fallbackLocale;

	const stored = localStorage.getItem(storageKey);
	if (stored) return normalizeLocale(stored);

	const navLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
	const detected = navLanguages.find(Boolean);
	return normalizeLocale(detected);
};

const loadLocale = async (target: Locale): Promise<Messages> => {
	const cached = messagesCache.get(target);
	if (cached) return cached;

	const loaders = Object.entries(localeLoaders).filter(([path]) => path.includes(`/locales/${target}/`));
	const modules = await Promise.all(loaders.map(([, loader]) => loader()));
	const merged = mergeMessages(modules.map((module) => module.default as Record<string, MessageValue>));

	messagesCache.set(target, merged);
	return merged;
};

const interpolate = (template: string, params?: Record<string, string | number>): string => {
	if (!params) return template;
	return template.replace(/{{\s*([\w.-]+)\s*}}/g, (_, key: string) => {
		const value = params[key];
		return value === undefined || value === null ? '' : String(value);
	});
};

const resolveValue = (value: MessageValue, params?: Record<string, string | number>) => {
	if (Array.isArray(value)) {
		return value.map((item) => interpolate(item, params));
	}
	return interpolate(value, params);
};

export const t = derived([messages, locale], ([$messages]) => {
	return (key: string, params?: Record<string, string | number>) => {
		const value = $messages[key];
		if (!value) return key;
		const resolved = resolveValue(value, params);
		return Array.isArray(resolved) ? resolved.join('\n') : resolved;
	};
});

export const tArray = derived([messages, locale], ([$messages]) => {
	return (key: string, params?: Record<string, string | number>) => {
		const value = $messages[key];
		if (!value) return [];
		const resolved = resolveValue(value, params);
		return Array.isArray(resolved) ? resolved : [resolved];
	};
});

export const setLocale = async (value: string | Locale) => {
	const next = normalizeLocale(value);
	const dictionary = await loadLocale(next);

	messages.set(dictionary);
	locale.set(next);

	if (browser) {
		localStorage.setItem(storageKey, next);
		document.documentElement.lang = next;
	}
};

export const initI18n = async () => {
	await setLocale(detectLocale());
};

