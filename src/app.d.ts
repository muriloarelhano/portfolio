// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		turnstile: {
			render: (
				container: string | HTMLElement,
				options: {
					sitekey: string;
					theme?: 'light' | 'dark' | 'auto';
					callback?: (token: string) => void;
					'error-callback'?: () => void;
					'expired-callback'?: (token: string) => void;
				}
			) => string;
			remove: (widgetId: string) => void;
			getResponse: (widgetId: string) => string | undefined;
			reset: (widgetId: string) => void;
		};
	}
}

declare module '$env/static/private' {
	export const API_KEY_RESEND: string;
	export const TURNSTILE_SECRET_KEY: string;
}

declare module '$env/static/public' {
	export const PUBLIC_TURNSTILE_SITE_KEY: string;
}

export { };
