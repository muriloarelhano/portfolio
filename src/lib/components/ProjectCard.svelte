<script lang="ts">
	export let stack: string[];
	export let name: string;
	export let description: string;
	export let link: string;
	export let image: any;
	export let cover: boolean = false;
	export let imageSize: {
		width?: string;
	} = { width: '200' };
</script>

<div class="flex flex-col max-w-[350px] border border-white">
	<div class="flex place-content-center h-[250px]">
		{#if cover}
			<img src={image} class="max-h-full max-w-full object-fill" alt="" />
		{:else}
			<img src={image} class="m-auto object-cover" width={imageSize.width} alt="" />
		{/if}
	</div>
	<div class="border border-white px-4">{stack.join(', ')}</div>
	<div class="flex flex-col flex-1 place-content-between gap-4 p-4">
		<h2 class="text-xl font-semibold">{name}</h2>
		<p>{description}</p>
		<a href={link}><button class="btn btn-outline">Live</button></a>
	</div>
</div>
