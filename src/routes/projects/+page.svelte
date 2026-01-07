<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { projects, smallProjects } from '../../data/projects';
</script>

<main>
	<div class="container m-auto px-4 lg:px-0">
		<h1 class="text-4xl mb-8 font-mono"><span class="text-primary">/</span>projects</h1>
		<SectionHeader title={'Large Projects'} size={2} />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
			{#each projects as project}
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
		<SectionHeader title={'Small Projects'} size={2} />
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
			{#each smallProjects as project}
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
</main>
