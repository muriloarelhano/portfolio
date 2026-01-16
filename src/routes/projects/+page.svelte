<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { projects, smallProjects } from '../../data/projects';
	import { t } from '$lib/i18n';

	const pageTitle = $derived($t('meta.projects.title'));
	const pageDescription = $derived($t('meta.projects.description'));
	const getProjectDescription = (project: (typeof projects)[number]) => {
		if (project.descriptionKey) {
			return $t(project.descriptionKey);
		}
		return project.description ?? '';
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<main>
	<div class="container m-auto px-4 lg:px-0">
		<h1 class="text-4xl mb-8 font-mono"><span class="text-primary">/</span>{$t('projects.pageTitle')}</h1>
		<SectionHeader title={$t('projects.largeTitle')} size={2} />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
			{#each projects as project}
				<ProjectCard
					name={project.name}
					description={getProjectDescription(project)}
					image={project.image}
					link={project.link}
					stack={project.stack}
					cover={project.cover}
					imageSize={project.imageSize}
				/>
			{/each}
		</div>
		<SectionHeader title={$t('projects.smallTitle')} size={2} />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
			{#each smallProjects as project}
				<ProjectCard
					name={project.name}
					description={getProjectDescription(project)}
					image={project.image}
					link={project.link}
					stack={project.stack}
					cover={project.cover}
					imageSize={project.imageSize}
				/>
			{/each}
		</div>
	</div>
</main>
