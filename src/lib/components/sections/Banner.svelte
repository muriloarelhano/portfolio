<script>
	import banner from '$lib/assets/banner.png';
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
				I hold a Bachelor's degree in Information Systems and have experience mainly with the NodeJs
				platform using Typescript and other languages such as Go. I work with development of web
				applications in general, also study other areas such as DevOps, and game development.
			</p>

			<div class="flex flex-row gap-4">
				<a href="#contact"><button class="btn btn-outline">Contact-me</button></a>
				<a href="https://github.com/muriloarelhano"
					><button class="btn"> <i class="fa-brands fa-github text-xl"></i> GitHub</button></a
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
