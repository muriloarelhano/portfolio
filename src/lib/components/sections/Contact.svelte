<script lang="ts">
	import { socialInfo } from '../../../data/social-info';
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import SectionHeader from '../SectionHeader.svelte';
	import { t } from '$lib/i18n';

	const contactDescription = $derived($t('contact.description'));
</script>

<section id="contact" class="my-28 px-4 lg:px-0">
	<div class="container m-auto">
		<SectionHeader title={$t('contact.sectionTitle')} />
		<div class="flex flex-col lg:flex-row justify-between w-full my-12 gap-12">
			<div class="flex flex-col lg:basis-1/2">
				<p class="text-xl mb-6 text-zinc-400">
					{#each contactDescription.split('\n') as line, index}
						{line}
						{#if index === 0}
							<br class="hidden md:block" />
						{/if}
					{/each}
				</p>
				<div class="flex gap-4">
					<a href="/resume" class="btn btn-primary">{$t('button.seeResume')}</a>
					<a href={socialInfo.linkedInLink} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-square">
						<Linkedin size={22} />
					</a>
					<a href={socialInfo.githubLink} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-square">
						<Github size={22} />
					</a>
				</div>
			</div>
			<div class="flex flex-col p-6 border border-zinc-700 bg-base-200/50 backdrop-blur-sm rounded-lg lg:min-w-[320px]">
				<p class="mb-4 font-bold text-lg">{$t('contact.directContact')}</p>
				<div class="flex items-center gap-3 group">
					<div class="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
						<Mail size={20} />
					</div>
					<a href="mailto:{socialInfo.email}" class="hover:text-primary transition-colors">
						{socialInfo.email}
					</a>
				</div>
				<p class="mt-6 text-xs text-zinc-500 font-mono">
					{$t('contact.basedIn', {
						city: $t('contact.location.city'),
						state: $t('contact.location.state'),
						country: $t('contact.location.country')
					})}
				</p>
			</div>
		</div>
	</div>
</section>
