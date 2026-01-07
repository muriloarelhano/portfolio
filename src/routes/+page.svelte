<script lang="ts">
	import Banner from '$lib/components/sections/Banner.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Murilo Arelhano',
		jobTitle: 'Software Engineer',
		url: 'https://muriloarelhano.com',
		sameAs: [
			'https://github.com/muriloarelhano',
			'https://www.linkedin.com/in/muriloarelhano/'
		],
		description: 'Software Engineer specializing in building exceptional digital experiences.'
	};
</script>

<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(structuredData)}
	</script>
</svelte:head>

<main>
	<Banner />
	<Projects />
	<Skills />
	<Contact />
</main>
