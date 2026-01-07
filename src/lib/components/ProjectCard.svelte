<script lang="ts">
	import type { Project } from '$lib/types';

	let {
		stack,
		name,
		description,
		link,
		image,
		cover = false,
		imageSize = { width: '200' }
	}: Project = $props();
</script>

<div class="flex flex-col max-w-[350px] border border-zinc-700 bg-base-200/40 backdrop-blur-sm overflow-hidden group hover:border-primary transition-colors">
	<div class="flex items-center justify-center h-[250px] bg-zinc-900/50 p-4">
		{#if cover}
			<img src={image} class="max-h-full max-w-full object-cover" alt={name} />
		{:else}
			<img src={image} class="m-auto object-contain transition-transform group-hover:scale-105" width={imageSize.width} alt={name} />
		{/if}
	</div>
	<div class="border-y border-zinc-700 px-4 py-2 text-sm font-mono text-zinc-400">
		{stack.join(', ')}
	</div>
	<div class="flex flex-col flex-1 justify-between gap-4 p-4 text-justify">
		<div>
			<h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
			<p class="text-sm line-clamp-3">{description}</p>
		</div>
		<a href={link} target="_blank" rel="noopener noreferrer">
			<button class="btn btn-outline btn-primary btn-sm w-fit">View Live</button>
		</a>
	</div>
</div>
