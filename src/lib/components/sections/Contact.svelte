<script lang="ts">
	import { socialInfo } from '../../../data/social-info';
	import { Mail } from 'lucide-svelte';
	import SectionHeader from '../SectionHeader.svelte';
	import ContactForm from '../ContactForm.svelte';
	import { t } from '$lib/i18n';

	const contactDescription = $derived($t('contact.description'));

	interface Props {
		form?: {
			success?: boolean;
			error?: string;
			values?: {
				name?: string;
				email?: string;
				message?: string;
			};
		} | null;
	}

	let { form }: Props = $props();
</script>

<section id="contact" class="my-28 px-4 lg:px-0">
	<div class="container m-auto">
		<SectionHeader title={$t('contact.sectionTitle')} />
		<div class="flex flex-col lg:flex-row justify-between w-full my-12 gap-12">
			<div class="flex flex-col lg:basis-1/2 gap-8">
				<p class="text-xl text-zinc-400 font-mono italic">
					{#each contactDescription.split('\n') as line}
						{line}<br />
					{/each}
				</p>
				<div class="flex flex-col items-start gap-6">
					<div class="flex items-center gap-4 group">
						<div
							class="p-3 bg-primary/5 text-primary border border-primary/20 rounded-sm transition-all group-hover:bg-primary group-hover:text-primary-content group-hover:border-primary"
						>
							<Mail size={20} />
						</div>
						<a
							href="mailto:{socialInfo.email}"
							class="text-lg font-mono hover:text-primary transition-colors tracking-tight"
						>
							{socialInfo.email}
						</a>
					</div>
					<div class="space-y-2">
						<p class="text-[10px] text-zinc-200 font-mono uppercase tracking-widest">
							{$t('contact.basedIn', {
								city: $t('contact.location.city'),
								state: $t('contact.location.state'),
								country: $t('contact.location.country')
							})}
						</p>
						<div class="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent"></div>
					</div>
					<a
						href="/resume"
						class="btn btn-outline btn-primary font-mono uppercase tracking-widest text-xs h-auto min-h-0 py-3 px-6 rounded-none"
					>
						{$t('button.seeResume')}
					</a>
				</div>
			</div>
			<div class="lg:basis-1/2">
				<div class="p-8 border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative">
					<div class="absolute top-0 left-0 w-2 h-[1px] bg-primary"></div>
					<div class="absolute top-0 left-0 w-[1px] h-2 bg-primary"></div>
					<div class="absolute bottom-0 right-0 w-2 h-[1px] bg-primary"></div>
					<div class="absolute bottom-0 right-0 w-[1px] h-2 bg-primary"></div>
					<ContactForm action="?/sendContact" {form} source="home" />
				</div>
			</div>
		</div>
	</div>
</section>
