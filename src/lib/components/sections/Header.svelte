<script lang="ts">
	import { match } from 'ts-pattern';
	import { page } from '$app/state';

	const path = $derived(page.url.pathname);

	const checkPath = (dest: string) => {
		return match(path)
			.with('/', () => `#${dest}`)
			.otherwise(() => `/${dest}`);
	};
</script>

<div class="py-6 sticky top-0 bg-base-100/80 backdrop-blur-sm z-50 print:hidden">
	<div class="container flex flex-row items-center justify-between m-auto px-4 lg:px-0">
		<a href="/" class="font-bold text-2xl hover:text-primary transition-colors">
			Murilo Arelhano
		</a>

		<nav class="flex flex-row items-center gap-8 font-mono text-sm">
			<a
				href="/"
				class="hover:text-primary transition-colors group"
				class:text-primary={path === '/'}
			>
				<span class="text-primary group-hover:text-white" class:text-white={path === '/'}>#</span
				>home
			</a>
			<a
				href={checkPath('projects')}
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/projects')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/projects')}>#</span
				>projects
			</a>
			<a
				href={checkPath('skills')}
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/skills')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/skills')}>#</span
				>skills
			</a>
			{#if path === '/'}
				<a href="#contact" class="hover:text-primary transition-colors group">
					<span class="text-primary group-hover:text-white">#</span>contacts
				</a>
			{/if}

			<a
				href="/resume"
				class="hover:text-primary transition-colors group"
				class:text-primary={path.startsWith('/resume')}
			>
				<span
					class="text-primary group-hover:text-white"
					class:text-white={path.startsWith('/resume')}>#</span
				>resume
			</a>
		</nav>
	</div>
</div>
