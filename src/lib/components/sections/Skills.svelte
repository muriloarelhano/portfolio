<script lang="ts">
	import dots from '$lib/assets/dots.svg';
	import logo from '$lib/assets/logo-outline.svg';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { skills } from '../../../data/skills';
	import SkillsCard from '../SkillsCard.svelte';
	import { t } from '$lib/i18n';

	const categoryLabels = {
		languages: 'skills.category.languages',
		frameworks: 'skills.category.frameworks',
		tools: 'skills.category.tools',
		databases: 'skills.category.databases',
		other: 'skills.category.other'
	} as const;
</script>

<section id="skills" class="mt-28">
	<div class="container m-auto">
		<SectionHeader
			title={$t('skills.sectionTitle')}
			button={{
				label: $t('button.viewAll'),
				link: '/skills'
			}}
		/>
		<div class="flex flex-col lg:flex-row place-content-between gap-12">
			<div class="hidden lg:block relative w-[500px] h-[350px]">
				<img class="absolute left-10 top-16" width="100px" src={dots} alt="" />
				<div class="absolute border border-white w-24 h-24 top-4 right-16"></div>
				<img class="absolute bottom-28 right-36" width="80px" src={dots} alt="" />
				<div class="absolute border border-white w-20 h-20 bottom-8 right-0"></div>
				<img class="absolute bottom-10 left-16" width="100px" src={logo} alt="" />
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:basis-3/6">
				{#each Object.entries(skills) as [key, value]}
					<SkillsCard
						title={$t(categoryLabels[key as keyof typeof categoryLabels] ?? key)}
						contents={value}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
