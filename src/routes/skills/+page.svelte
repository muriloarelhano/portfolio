<script>
	import SkillsCard from '$lib/components/SkillsCard.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import { skills } from '../../data';
</script>

<Header />

<main>
	<div class="container m-auto">
		<h1 class="text-4xl mb-8"><span class="text-purple-500">/</span>skills</h1>
		<div class="grid grid-cols-[repeat(auto-fill,minmax(100px,_250px))] gap-8 basis-3/6">
			{#each Object.entries(skills) as [key, value]}
				<SkillsCard title={key.charAt(0).toUpperCase() + key.slice(1)} contents={value} />
			{/each}
		</div>
	</div>
</main>

<Footer />
