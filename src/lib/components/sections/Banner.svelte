<script>
	import banner from '$lib/assets/banner.png';
	import { Github } from 'lucide-svelte';
</script>

<section class="relative py-10">
	<div class="container flex flex-row justify-between items-center m-auto">
		<div id="banner-description" class="flex flex-col flex-grow-0 basis-2/4 gap-8">
			<div class="font-bold">
				<h1 class="text-4xl">
					Hi, <span
						class="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
						>I'm Murilo Arelhano</span
					>
				</h1>
				<h1 class="text-2xl">Full-Stack Developer</h1>
			</div>
			<p>
				I have a Bachelor's degree in Information Systems and work as a developer focused on Node.js
				with TypeScript, React, Next.js, and other languages like Go. I specialize in building web
				applications, microservices, and APIs as a full-stack developer, always prioritizing
				scalability and best practices. I also have a strong interest in information security,
				DevOps, and game development, constantly seeking new knowledge and challenges.
			</p>

			<div class="flex flex-row gap-4">
				<a href="#contact"><button class="btn btn-outline">Contact-me</button></a>
				<a href="https://github.com/muriloarelhano"
					><button class="btn"><Github /> GitHub</button></a
				>
			</div>
		</div>
		<div id="banner-container" class="relative flex flex-col place-content-center">
			<div class="bg-cover" style="background-image: url('/banner-shape.png'); ">
				<img alt="Banner with my photograph" src={banner} class="m-auto" width="400" />
			</div>
			<div class="flex flex-row gap-2 border border-white p-2 w-[450px]">
				<div class="w-3 h-3 bg-purple-500"></div>
				<p>Currently working on <strong>Gringo</strong> (Brazil)</p>
			</div>
		</div>
	</div>
</section>
