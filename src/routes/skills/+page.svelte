<script lang="ts">
	import SkillsCard from '$lib/components/SkillsCard.svelte';
	import { skills } from '../../data/skills';
</script>

<main>
	<div class="container m-auto px-4 lg:px-0">
		<h1 class="text-4xl mb-8 font-mono"><span class="text-primary">/</span>skills</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{#each Object.entries(skills) as [key, value]}
				<SkillsCard title={key.charAt(0).toUpperCase() + key.slice(1)} contents={value} />
			{/each}
		</div>
	</div>
</main>
