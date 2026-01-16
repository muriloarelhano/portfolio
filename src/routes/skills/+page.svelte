<script lang="ts">
	import SkillsCard from '$lib/components/SkillsCard.svelte';
	import { skills } from '../../data/skills';
	import { t } from '$lib/i18n';

	const pageTitle = $derived($t('meta.skills.title'));
	const pageDescription = $derived($t('meta.skills.description'));
	const categoryLabels = {
		languages: 'skills.category.languages',
		frameworks: 'skills.category.frameworks',
		tools: 'skills.category.tools',
		databases: 'skills.category.databases',
		other: 'skills.category.other'
	} as const;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<main>
	<div class="container m-auto px-4 lg:px-0">
		<h1 class="text-4xl mb-8 font-mono"><span class="text-primary">/</span>{$t('skills.pageTitle')}</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{#each Object.entries(skills) as [key, value]}
				<SkillsCard
					title={$t(categoryLabels[key as keyof typeof categoryLabels] ?? key)}
					contents={value}
				/>
			{/each}
		</div>
	</div>
</main>
