<script lang="ts">
	export let stack: string[];
	export let name: string;
	export let description: string;
	export let link: string;
	export let image: any;
	export let imgWidthPx: number = 250;
	export let imgMaxHeightPx: number = 250;
</script>

<div class="flex flex-col max-w-[350px] border border-white">
	<div class="flex place-content-center h-[250px]">
		<img
			src={image}
			class="m-auto object-cover max-h-[{imgMaxHeightPx}px]"
			width={imgWidthPx}
			alt=""
		/>
	</div>
	<div class="border border-white px-4">{stack.join(', ')}</div>
	<div class="flex flex-col flex-1 place-content-between gap-4 p-4">
		<h2 class="text-xl font-semibold">{name}</h2>
		<p>{description}</p>
		<a href={link}><button class="btn btn-outline">Live</button></a>
	</div>
</div>
