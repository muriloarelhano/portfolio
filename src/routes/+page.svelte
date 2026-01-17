<script lang="ts">
	import Banner from '$lib/components/sections/Banner.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Freelance from '$lib/components/sections/Freelance.svelte';
	import Timeline from '$lib/components/sections/Timeline.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { t } from '$lib/i18n';

	let { form } = $props();

	const structuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: $t('common.name'),
		jobTitle: $t('meta.home.structured.jobTitle'),
		url: 'https://muriloarelhano.com',
		sameAs: [
			'https://github.com/muriloarelhano',
			'https://www.linkedin.com/in/muriloarelhano/'
		],
		description: $t('meta.home.structured.description')
	});
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
	<Freelance />
	<Timeline />
	<Contact {form} />
</main>
