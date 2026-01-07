<script lang="ts">
	interface Props {
		title: string;
		contents: string[];
	}

	let { title, contents }: Props = $props();
</script>

<div class="flex flex-col border border-zinc-700 bg-base-200/40 backdrop-blur-sm group hover:border-primary transition-all">
	<div class="text-lg font-bold border-b border-zinc-700 p-3 font-mono">
		<span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">> </span>{title}
	</div>
	<div class="p-3 flex flex-wrap gap-2">
		{#each contents as content}
			<span class="badge badge-ghost badge-outline rounded-none font-mono text-xs">{content}</span>
		{/each}
	</div>
</div>
