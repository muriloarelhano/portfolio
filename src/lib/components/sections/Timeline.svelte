<script lang="ts">
	import { experiences } from '../../../data/experience';
	import SectionHeader from '../SectionHeader.svelte';
	import { fade, fly } from 'svelte/transition';
	import { Briefcase, GraduationCap } from 'lucide-svelte';
	import { t, tArray } from '$lib/i18n';

	let selectedIndex = $state(experiences.length - 1);
	let selectedExperience = $derived(experiences[selectedIndex]);

	function select(index: number) {
		selectedIndex = index;
	}
</script>

<section id="timeline" class="mt-28">
	<div class="container m-auto px-4">
		<SectionHeader title={$t('timeline.sectionTitle')} />

		<div class="relative mt-24 mb-16 py-10">
			<!-- Horizontal Line -->
			<div class="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>

			<!-- Dots and Years -->
			<div class="relative flex justify-between items-center">
				{#each experiences as exp, i}
					<div class="flex flex-col items-center z-10">
						<button
							class="flex flex-col items-center group transition-all duration-300"
							onclick={() => select(i)}
							aria-label={$t('timeline.selectExperience', { company: exp.company })}
						>
							{#if exp.year}
								<span
									class="absolute -top-12 text-xs md:text-sm font-mono transition-all duration-300 {selectedIndex ===
									i
										? 'text-primary scale-110'
										: 'text-base-content/40'}"
								>
									{exp.year}
								</span>
							{/if}

							<div
								class="w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 transform {selectedIndex ===
								i
									? 'bg-primary border-primary ring-8 ring-primary/5 scale-110'
									: 'bg-[#0a0a0a] border-white/20 hover:border-white/40 group-hover:scale-105'}"
							>
								{#if exp.type === 'work'}
									<Briefcase
										size={16}
										class={selectedIndex === i ? 'text-black' : 'text-white/40'}
									/>
								{:else}
									<GraduationCap
										size={16}
										class={selectedIndex === i ? 'text-black' : 'text-white/40'}
									/>
								{/if}
							</div>
						</button>
					</div>
				{/each}
			</div>
		</div>

		<!-- Detail Card -->
		<div class="min-h-55 flex justify-center mt-12">
			{#key selectedIndex}
				<div
					in:fly={{ y: 10, duration: 300 }}
					class="w-full max-w-3xl border border-zinc-700 bg-base-200/40 backdrop-blur-sm p-6 md:p-8"
				>
					<div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
						<div class="flex-1">
							<div class="flex items-center gap-3 mb-1">
								<span class="text-primary font-mono">></span>
								<h3 class="text-xl md:text-2xl font-bold tracking-tight">
									{selectedExperience.company}
								</h3>
								{#if selectedExperience.type === 'education'}
									<div class="badge badge-sm badge-outline opacity-50 font-mono">
										{selectedExperience.badgeKey
											? $t(selectedExperience.badgeKey)
											: $t('timeline.badge.academic')}
									</div>
								{/if}
								{#if selectedExperience.type === 'work'}
									<div class="badge badge-sm badge-outline opacity-50 font-mono">
										{selectedExperience.badgeKey
											? $t(selectedExperience.badgeKey)
											: $t('timeline.badge.professional')}
									</div>
								{/if}
							</div>
							<p class="text-lg text-white/70 font-mono mb-4">
								{$t(selectedExperience.roleKey)}
							</p>

							{#if selectedExperience.descriptionKey}
								<ul class="space-y-2 text-sm md:text-base text-white/50 font-mono">
									{#each $tArray(selectedExperience.descriptionKey) as item}
										<li class="flex gap-2">
											<span class="text-primary font-bold">#</span>
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							{/if}
						</div>

						<div class="text-right flex flex-col items-end shrink-0">
							<span
								class="badge badge-primary badge-outline rounded-none font-mono uppercase tracking-widest px-4"
							>
								{$t(selectedExperience.periodKey)}
							</span>
						</div>
					</div>
				</div>
			{/key}
		</div>
	</div>
</section>

<style>
	/* Custom scrollbar for horizontal mobile view if needed */
	section {
		scroll-margin-top: 5rem;
	}
</style>
