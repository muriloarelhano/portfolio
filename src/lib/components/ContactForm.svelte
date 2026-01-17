<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { t } from '$lib/i18n';
	import { CircleCheck, TriangleAlert } from 'lucide-svelte';

	interface FormValues {
		name?: string;
		email?: string;
		message?: string;
		reason?: string;
		budget?: string;
	}

	interface FormState {
		success?: boolean;
		error?: string;
		values?: FormValues;
	}

	interface Props {
		action?: string;
		form?: FormState | null;
		source?: string;
	}

	let { action = '?/sendContact', form, source = 'home' }: Props = $props();

	let reason = $state(form?.values?.reason ?? 'freelance');
	let submitting = $state(false);

	// Sync reason if form values change (e.g. after a failed submission)
	$effect(() => {
		if (form?.values?.reason && form.values.reason !== reason) {
			reason = form.values.reason;
		}
	});

	const success = $derived(form?.success);
	const error = $derived(form?.error);
	const values = $derived(form?.values ?? {});
	const hasTurnstile = $derived(Boolean(PUBLIC_TURNSTILE_SITE_KEY));

	const messageLabel = $derived(
		reason === 'freelance' ? 'contact.form.messageLabelFreelance' : 'contact.form.messageLabel'
	);

	let turnstileContainer: HTMLElement | undefined = $state();
	let widgetId: string | undefined = $state();

	$effect(() => {
		if (!hasTurnstile || !turnstileContainer) return;

		let mounted = true;

		const initTurnstile = () => {
			if (!mounted) return;

			if (window.turnstile && turnstileContainer) {
				try {
					widgetId = window.turnstile.render(turnstileContainer, {
						sitekey: PUBLIC_TURNSTILE_SITE_KEY,
						theme: 'dark'
					});
				} catch (e) {
					console.error('Turnstile render error:', e);
				}
			} else {
				setTimeout(initTurnstile, 100);
			}
		};

		initTurnstile();

		return () => {
			mounted = false;
			if (widgetId && window.turnstile) {
				window.turnstile.remove(widgetId);
				widgetId = undefined;
			}
		};
	});
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-mono font-bold tracking-tight">
			<span class="text-primary mr-2">#</span>{$t('contact.form.title')}
		</h2>
		<div class="h-1 w-12 bg-primary"></div>
	</div>

	<form
		method="POST"
		{action}
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update();
				submitting = false;
				if (widgetId && window.turnstile) {
					window.turnstile.reset(widgetId);
				}
			};
		}}
		class="flex flex-col gap-8 text-left"
	>
		<input type="hidden" name="source" value={source} />

		<!-- Reason Selection -->
		<div class="space-y-4">
			<label class="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-[0.2em]">
				01. {$t('contact.form.reasonLabel')}
			</label>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
				{#each ['freelance', 'job', 'general'] as r}
					<button
						type="button"
						class="relative flex items-center justify-center p-4 rounded-none border cursor-pointer transition-all duration-300 group
						{reason === r
							? 'bg-primary/10 border-primary text-primary'
							: 'bg-base-200/50 border-zinc-600 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'}"
						onclick={() => (reason = r)}
						disabled={submitting}
					>
						<input type="radio" name="reason" value={r} class="sr-only" checked={reason === r} />
						<span class="text-[10px] font-mono font-bold uppercase tracking-wider"
							>{$t(`contact.form.reasons.${r}`)}</span
						>
						{#if reason === r}
							<div class="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div class="space-y-6">
			<label
				class="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2 block"
			>
				02. Information
			</label>

			<!-- Name & Email Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<label class="group">
					<span
						class="block text-[10px] font-mono text-zinc-400 mb-2 group-focus-within:text-primary transition-colors uppercase"
					>
						{$t('contact.form.nameLabel')}
					</span>
					<input
						name="name"
						required
						placeholder="E.G. JOHN DOE"
						autocomplete="name"
						class="input input-bordered w-full rounded-none bg-base-300/30 border-zinc-700 focus:border-primary focus:outline-none transition-all placeholder:text-zinc-600 font-mono text-xs uppercase"
						value={values.name ?? ''}
						disabled={submitting}
					/>
				</label>
				<label class="group">
					<span
						class="block text-[10px] font-mono text-zinc-400 mb-2 group-focus-within:text-primary transition-colors uppercase"
					>
						{$t('contact.form.emailLabel')}
					</span>
					<input
						name="email"
						required
						placeholder="EMAIL@DOMAIN.COM"
						autocomplete="email"
						type="email"
						class="input input-bordered w-full rounded-none bg-base-300/30 border-zinc-700 focus:border-primary focus:outline-none transition-all placeholder:text-zinc-600 font-mono text-xs uppercase"
						value={values.email ?? ''}
						disabled={submitting}
					/>
				</label>
			</div>

			<!-- Conditional Budget Field -->
			{#if reason === 'freelance'}
				<label
					class="group transition-all duration-300 animate-in fade-in slide-in-from-top-2 block"
				>
					<span
						class="block text-[10px] font-mono text-zinc-400 mb-2 group-focus-within:text-primary transition-colors uppercase"
					>
						{$t('contact.form.budgetLabel')}
					</span>
					<input
						name="budget"
						placeholder="ESTIMATED BUDGET (E.G. $5,000)"
						class="input input-bordered w-full rounded-none bg-base-300/30 border-zinc-700 focus:border-primary focus:outline-none transition-all placeholder:text-zinc-600 font-mono text-xs uppercase"
						value={values.budget ?? ''}
						disabled={submitting}
					/>
				</label>
			{/if}
		</div>

		<!-- Message Field -->
		<div class="space-y-4">
			<label class="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-[0.2em] block">
				03. {$t(messageLabel)}
			</label>
			<label class="group block">
				<textarea
					name="message"
					required
					rows={5}
					placeholder={reason === 'freelance'
						? '> PLEASE DESCRIBE YOUR PROJECT REQUIREMENTS, STACK AND GOALS...'
						: '> TYPE YOUR MESSAGE HERE...'}
					class="textarea textarea-bordered w-full rounded-none bg-base-300/30 border-zinc-700 focus:border-primary focus:outline-none transition-all placeholder:text-zinc-600 resize-none font-mono text-xs uppercase"
					disabled={submitting}>{values.message ?? ''}</textarea
				>
			</label>
		</div>

		<!-- Security & Notice -->
		<div class="space-y-8 mt-4">
			{#if hasTurnstile}
				<div class="flex justify-center border border-zinc-700 p-4 bg-zinc-900/40">
					<div bind:this={turnstileContainer} class="scale-90 sm:scale-100 min-h-[65px]"></div>
				</div>
			{:else}
				<div
					class="bg-warning/10 border border-warning/30 p-4 text-[10px] font-mono text-warning text-center uppercase tracking-widest"
				>
					{$t('contact.form.errors.turnstileMissing')}
				</div>
			{/if}

			<div class="space-y-4">
				<button
					type="submit"
					disabled={submitting}
					class="group relative w-full bg-primary py-4 px-8 overflow-hidden transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed"
				>
					<div
						class="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"
					></div>
					<div class="relative z-10 flex items-center justify-center gap-3">
						{#if submitting}
							<span class="loading loading-spinner loading-xs text-primary-content"></span>
						{/if}
						<span class="uppercase tracking-[0.3em] font-mono font-black text-primary-content">
							{submitting ? $t('contact.form.submitting') : $t('contact.form.submit')}
						</span>
					</div>
				</button>

				<p class="text-[9px] text-zinc-500 font-mono text-center uppercase tracking-[0.2em]">
					// {$t('contact.form.notice')}
				</p>

				{#if success}
					<div
						class="alert alert-success rounded-none font-mono text-xs shadow-lg animate-in fade-in slide-in-from-bottom-2"
					>
						<CircleCheck size={18} />
						<span class="font-bold uppercase tracking-tight">{$t('contact.form.success')}</span>
					</div>
				{/if}
				{#if error}
					<div
						class="alert alert-error rounded-none font-mono text-xs shadow-lg animate-in fade-in slide-in-from-bottom-2"
					>
						<TriangleAlert size={18} />
						<span class="font-bold uppercase tracking-tight">{$t(error)}</span>
					</div>
				{/if}
			</div>
		</div>
	</form>
</div>
