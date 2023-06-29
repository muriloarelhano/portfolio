<script lang="ts">
	import { match } from 'ts-pattern';
	import { page } from '$app/stores';

	const path = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/'));

	const checkPath = (dest: string) => {
		return match(path)
			.with('/', () => `#${dest}`)
			.otherwise(() => `/${dest}`);
	};
</script>

<div class="py-8 print:hidden">
	<div class="container flex flex-row items-center justify-between m-auto">
		<h1 class="font-bold">Murilo Arelhano</h1>

		<nav class="flex flex-row items-center gap-8">
			<a href="/">#home</a>
			<a href={checkPath('projects')}>#projects</a>
			<a href={checkPath('skills')}>#skills</a>
			{#if path == '/'}
				<a href={'#contact'}>#contacts</a>
			{/if}

			<a href="/resume">#resume</a>
		</nav>
	</div>
</div>
