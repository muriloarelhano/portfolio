<script lang="ts">
	import { projects, smallProjects } from '../../../data/projects';
	import ProjectCard from '../ProjectCard.svelte';
	import SectionHeader from '../SectionHeader.svelte';

	const displayedProjects = [...projects, ...smallProjects].slice(0, 4);
</script>

<section id="projects" class="mt-28">
	<div class="container m-auto px-4 lg:px-0">
		<SectionHeader
			title={'projects'}
			button={{
				label: 'view all',
				link: '/projects'
			}}
		/>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
			{#each displayedProjects as project}
				<ProjectCard
					name={project.name}
					description={project.description}
					image={project.image}
					link={project.link}
					stack={project.stack}
					cover={project.cover}
					imageSize={project.imageSize}
				/>
			{/each}
		</div>
	</div>
</section>
