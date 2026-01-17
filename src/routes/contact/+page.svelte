<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { t } from '$lib/i18n';
	import { socialInfo } from '../../data/social-info';
	import { Mail } from 'lucide-svelte';

	let { form } = $props();

	const pageTitle = $derived($t('meta.contact.title'));
	const pageDescription = $derived($t('meta.contact.description'));
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<main>
	<div class="container m-auto px-4 lg:px-0">
		<h1 class="text-4xl mb-8 font-mono"><span class="text-primary">/</span>{$t('contact.pageTitle')}</h1>
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div class="lg:col-span-5 flex flex-col gap-6">
				<SectionHeader title={$t('contact.pageSection')} size={2} />
				<p class="text-lg text-zinc-300">{$t('contact.pageLead')}</p>
				<p class="text-sm text-zinc-400">{$t('contact.pageDetails')}</p>
				<div class="flex items-center gap-3">
					<div class="p-2 bg-primary/10 text-primary rounded-lg">
						<Mail size={20} />
					</div>
					<a href="mailto:{socialInfo.email}" class="hover:text-primary transition-colors">
						{socialInfo.email}
					</a>
				</div>
			</div>
			<div class="lg:col-span-7">
				<div class="p-8 border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative">
					<div class="absolute top-0 left-0 w-2 h-[1px] bg-primary"></div>
					<div class="absolute top-0 left-0 w-[1px] h-2 bg-primary"></div>
					<div class="absolute bottom-0 right-0 w-2 h-[1px] bg-primary"></div>
					<div class="absolute bottom-0 right-0 w-[1px] h-2 bg-primary"></div>
					<ContactForm action="?/sendContact" {form} source="contact" />
				</div>
			</div>
		</div>
	</div>
</main>
