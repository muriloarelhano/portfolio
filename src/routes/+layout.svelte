<script lang="ts">
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />

{@render children?.()}

<Footer />
