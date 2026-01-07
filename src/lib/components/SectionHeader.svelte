<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';

	interface ButtonProps {
		link: string;
		label: string;
	}
	interface Props {
		title: string;
		button?: ButtonProps;
		size?: 2 | 4;
	}

	let { title, button, size = 4 }: Props = $props();
</script>

<div class="flex flex-row items-center mb-8">
	<h2
		class="font-mono font-bold"
		class:text-2xl={size === 2}
		class:text-4xl={size === 4}
	>
		<span class="text-primary">#</span>{title}
	</h2>
	<div class="bg-primary/20 ml-5 flex-1 h-0.5"></div>
	{#if button}
		<a href={button.link} class="ml-auto"
			><button class="btn btn-ghost btn-sm gap-2"
				>{button.label} <ExternalLink size={16} /></button
			></a
		>
	{/if}
</div>
