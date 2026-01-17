<script lang="ts">
	import { match } from 'ts-pattern';
	import { page } from '$app/state';
	import { Globe } from 'lucide-svelte';
	import { locale, setLocale, t } from '$lib/i18n';

	const path = $derived(page.url.pathname);
	const currentLocale = $derived($locale);
	const nextLocale = $derived(currentLocale === 'pt-BR' ? 'en-US' : 'pt-BR');

	const checkPath = (dest: string) => {
		return match(path)
			.with('/', () => `#${dest}`)
			.otherwise(() => `/${dest}`);
	};
</script>

<div class="py-6 sticky top-0 bg-base-100/80 backdrop-blur-sm z-50 print:hidden">
	<div class="container flex flex-row items-center justify-between m-auto px-4 lg:px-0">
		<a href="/" class="font-bold text-2xl hover:text-primary transition-colors">
			{$t('common.name')}
		</a>

		<nav class="flex flex-row items-center gap-8 font-mono text-sm">
			<a
				href="/"
				class="hover:text-primary transition-colors group"
				class:text-primary={path === '/'}
			>
				<span class="text-primary group-hover:text-white" class:text-white={path === '/'}>#</span
				>{$t('nav.home')}
			</a>
			<a
				href={checkPath('projects')}
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/projects')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/projects')}>#</span
				>{$t('nav.projects')}
			</a>
			<a
				href={checkPath('skills')}
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/skills')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/skills')}>#</span
				>{$t('nav.skills')}
			</a>
			<a
				href="/contact"
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/contact')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/contact')}>#</span
				>{$t('nav.contacts')}
			</a>

			<a
				href="/resume"
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/resume')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/resume')}>#</span
				>{$t('nav.resume')}
			</a>
			<div class="dropdown dropdown-end">
				<button
					type="button"
					class="btn btn-ghost btn-sm font-mono"
					tabindex="0"
					aria-label={$t('nav.languageLabel')}
					title={$t('nav.changeLanguage', { language: nextLocale })}
				>
					<Globe size={16} />
					{currentLocale}
				</button>
				<ul
					class="menu dropdown-content mt-2 p-2 shadow bg-base-200 rounded-box w-40 border border-zinc-700"
					tabindex="0"
					role="menu"
				>
					<li>
						<button
							type="button"
							class:text-primary={currentLocale === 'pt-BR'}
							onclick={() => setLocale('pt-BR')}
						>
							Português (BR)
						</button>
					</li>
					<li>
						<button
							type="button"
							class:text-primary={currentLocale === 'en-US'}
							onclick={() => setLocale('en-US')}
						>
							English (US)
						</button>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</div>
