<script lang="ts">
	interface ButtonProps {
		link: string;
		label: string;
	}
	interface Props {
		title: string;
		button?: ButtonProps | undefined;
		size?: number;
	}

	let { title, button = undefined, size = 4 }: Props = $props();
</script>

<div class="flex flex-row place-items-center mb-8">
	<span class="text-{size}xl"><span class="text-purple-400">#</span>{title}</span>
	<div class="bg-purple-400 ml-5 w-5/12 h-0.5"></div>
	{#if button}
		<a href={button.link} class="ml-auto"><button>{button.label}</button></a>
	{/if}
</div>
