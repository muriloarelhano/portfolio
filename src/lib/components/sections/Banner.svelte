<script lang="ts">
	import banner from '$lib/assets/banner.png';
	import { Github } from 'lucide-svelte';
</script>

<section class="relative py-12 px-4 lg:px-0">
	<div class="container flex flex-col lg:flex-row justify-between items-center m-auto gap-12">
		<div id="banner-description" class="flex flex-col flex-grow-0 lg:basis-2/4 gap-8 text-center lg:text-left">
			<div class="font-bold">
				<h1 class="text-4xl lg:text-5xl mb-2">
					Hi, <span
						class="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
						>I'm Murilo Arelhano</span
					>
				</h1>
				<h2 class="text-2xl lg:text-3xl text-zinc-400">Full-Stack Developer</h2>
			</div>
			<p class="text-lg leading-relaxed">
				I have a Bachelor's degree in Information Systems and work as a developer focused on Node.js
				with TypeScript, React, Next.js, and other languages like Go. I specialize in building web
				applications, microservices, and APIs as a full-stack developer, always prioritizing
				scalability and best practices.
			</p>

			<div class="flex flex-row gap-4 justify-center lg:justify-start">
				<a href="#contact" class="btn btn-outline btn-primary px-8">Contact me</a>
				<a href="https://github.com/muriloarelhano" target="_blank" rel="noopener noreferrer" class="btn btn-ghost border-zinc-700">
					<Github size={20} /> GitHub
				</a>
			</div>
		</div>
		<div id="banner-container" class="relative flex flex-col items-center">
			<div class="relative">
				<img alt="Banner with my photograph" src={banner} class="relative z-10 w-full max-w-[400px]" />
				<img alt="" src="/banner-shape.png" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-auto opacity-50" />
			</div>
			<div class="flex flex-row gap-3 items-center border border-zinc-700 bg-base-200/50 backdrop-blur-sm p-3 mt-4 w-full max-w-[450px]">
				<div class="w-3 h-3 bg-primary shrink-0"></div>
				<p class="text-sm">Currently working on <strong class="text-primary">Gringo</strong> (Brazil)</p>
			</div>
		</div>
	</div>
</section>
