<script lang="ts">
	import { projects, smallProjects } from '../../../data/projects';
	import ProjectCard from '../ProjectCard.svelte';
	import SectionHeader from '../SectionHeader.svelte';
</script>

<section id="projects" class="mt-28">
	<div class="container">
		<SectionHeader
			title={'projects'}
			button={{
				label: 'view all',
				link: '/projects'
			}}
		/>

		<div class="grid grid-cols-3 gap-8 place-content-between">
			{#each [...projects, ...smallProjects] as project, i}
				{#if i < 3}
					<ProjectCard
						name={project.name}
						description={project.description}
						image={project.image}
						link={project.link}
						imageSize={project.imageSize}
						cover={project.cover}
						stack={project.stack}
					/>
				{/if}
			{/each}
		</div>
	</div>
</section>
