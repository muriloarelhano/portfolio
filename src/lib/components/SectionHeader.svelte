<script lang="ts">
	interface ButtonProps {
		link: string;
		label: string;
	}
	export let title: string;
	export let button: ButtonProps | undefined = undefined;
</script>

<div class="flex flex-row place-items-center mb-8">
	<span class="text-4xl"><span class="text-purple-400">#</span>{title}</span>
	<div class="bg-purple-400 ml-5 w-5/12 h-0.5" />
	{#if button}
		<a href={button.link} class="ml-auto"><button>{button.label}</button></a>
	{/if}
</div>
