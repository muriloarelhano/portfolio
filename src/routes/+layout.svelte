<script lang="ts">
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { initI18n, t } from '$lib/i18n';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	const siteTitle = $derived($t('meta.site.title'));
	const siteDescription = $derived($t('meta.site.description'));
	const siteKeywords = $derived($t('meta.site.keywords'));
	const ogTitle = $derived($t('meta.site.ogTitle'));
	const ogDescription = $derived($t('meta.site.ogDescription'));

	onMount(() => {
		initI18n();
	});
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta
		name="description"
		content={siteDescription}
	/>
	<meta
		name="keywords"
		content={siteKeywords}
	/>
	<meta name="author" content="Murilo Arelhano" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ogTitle} />
	<meta
		property="og:description"
		content={ogDescription}
	/>
	<meta property="og:image" content="/portfolio.png" />

</svelte:head>

<Header />

{@render children?.()}

<Footer />
