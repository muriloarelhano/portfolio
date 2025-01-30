<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	import Header from '$lib/components/sections/Header.svelte';
	import { projects, smallProjects } from '../../data';
</script>

<Header />

<main>
	<div class="container m-auto">
		<h1 class="text-4xl mb-8"><span class="text-purple-500">/</span>projects</h1>
		<SectionHeader title={'Large Projects'} size={2} />
		<div class="grid grid-cols-3 gap-8 place-content-between mb-16">
			{#each projects as project, i}
				<ProjectCard
					name={project.name}
					description={project.description}
					image={project.image}
					link={project.link}
					imageSize={project.imageSize}
					cover={project.cover}
					stack={project.stack}
				/>
			{/each}
		</div>
		<SectionHeader title={'Small Projects'} size={2} />
		<div class="grid grid-cols-3 gap-8 place-content-between">
			{#each smallProjects as project, i}
				<ProjectCard
					name={project.name}
					description={project.description}
					image={project.image}
					link={project.link}
					imageSize={project.imageSize}
					cover={project.cover}
					stack={project.stack}
				/>
			{/each}
		</div>
	</div>
</main>

<Footer />
