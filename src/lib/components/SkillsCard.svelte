<script lang="ts">
	let { title, contents } = $props();
</script>

<div class="flex flex-col border border-white">
	<div class="text-xl font-semibold border border-white p-2">{title}</div>
	<div class="p-2">
		{#each contents as content}
			<p>{content}</p>
		{/each}
	</div>
</div>
