<script lang="ts">
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Murilo Arelhano - Software Engineer Portfolio</title>
	<meta
		name="description"
		content="Software Engineer specializing in building exceptional digital experiences. Explore my projects, skills, and professional journey."
	/>
	<meta
		name="keywords"
		content="Murilo Arelhano, Software Engineer, Portfolio, Full-stack, Frontend, Backend, SvelteKit, TypeScript, Developer"
	/>
	<meta name="author" content="Murilo Arelhano" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Murilo Arelhano - Software Engineer Portfolio" />
	<meta
		property="og:description"
		content="Software Engineer specializing in building exceptional digital experiences. Explore my projects, skills, and professional journey."
	/>
	<meta property="og:image" content="/portfolio.png" />

</svelte:head>

<Header />

{@render children?.()}

<Footer />
