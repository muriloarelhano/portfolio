<script lang="ts">
	import { Globe, ShieldCheck, Zap } from 'lucide-svelte';
	import { t, tArray } from '$lib/i18n';
	import SectionHeader from '../SectionHeader.svelte';

	const highlights = $derived($tArray('freelance.highlights'));
</script>

<section id="freelance" class="my-28 px-4 lg:px-0">
	<div class="container m-auto">
		<SectionHeader title={$t('freelance.sectionTitle')} />
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div class="lg:col-span-7 flex flex-col gap-6">
				<p class="text-xl text-zinc-200">{$t('freelance.lead')}</p>
				<p class="text-base text-zinc-400">{$t('freelance.description')}</p>
				<ul class="flex flex-col gap-3 text-sm text-zinc-300">
					{#each highlights as item}
						<li class="flex gap-3">
							<span class="text-primary">◆</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="lg:col-span-5 grid gap-4">
				<div class="p-6 border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative group hover:border-primary/50 transition-colors">
					<div class="absolute top-0 right-0 w-2 h-[1px] bg-zinc-800 group-hover:bg-primary"></div>
					<div class="absolute top-0 right-0 w-[1px] h-2 bg-zinc-800 group-hover:bg-primary"></div>
					<div class="flex items-center gap-4 mb-3">
						<div class="p-2 bg-primary/5 text-primary rounded-sm border border-primary/10">
							<Globe size={18} />
						</div>
						<h3 class="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">{$t('freelance.cards.international.title')}</h3>
					</div>
					<p class="text-xs text-zinc-500 font-mono leading-relaxed">{$t('freelance.cards.international.description')}</p>
				</div>

				<div class="p-6 border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative group hover:border-primary/50 transition-colors">
					<div class="absolute top-0 right-0 w-2 h-[1px] bg-zinc-800 group-hover:bg-primary"></div>
					<div class="absolute top-0 right-0 w-[1px] h-2 bg-zinc-800 group-hover:bg-primary"></div>
					<div class="flex items-center gap-4 mb-3">
						<div class="p-2 bg-primary/5 text-primary rounded-sm border border-primary/10">
							<ShieldCheck size={18} />
						</div>
						<h3 class="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">{$t('freelance.cards.industry.title')}</h3>
					</div>
					<p class="text-xs text-zinc-500 font-mono leading-relaxed">{$t('freelance.cards.industry.description')}</p>
				</div>

				<div class="p-6 border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative group hover:border-primary/50 transition-colors">
					<div class="absolute top-0 right-0 w-2 h-[1px] bg-zinc-800 group-hover:bg-primary"></div>
					<div class="absolute top-0 right-0 w-[1px] h-2 bg-zinc-800 group-hover:bg-primary"></div>
					<div class="flex items-center gap-4 mb-3">
						<div class="p-2 bg-primary/5 text-primary rounded-sm border border-primary/10">
							<Zap size={18} />
						</div>
						<h3 class="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">{$t('freelance.cards.delivery.title')}</h3>
					</div>
					<p class="text-xs text-zinc-500 font-mono leading-relaxed">{$t('freelance.cards.delivery.description')}</p>
				</div>
			</div>
		</div>
	</div>
</section>
