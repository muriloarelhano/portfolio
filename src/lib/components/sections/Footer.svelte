<script>
	import { socialInfo } from '../../../data/social-info';
</script>

<footer class="mt-12 mb-4 border-t border-t-slate-300 print:hidden">
	<div class="container">
		<div class="flex place-content-between w-full my-12">
			<div class="flex flex-col">
				<h2 class="text-lg font-bold mb-2">Murilo Arelhano</h2>
				<p>Full Stack web developer</p>
			</div>
			<div class="flex flex-col">
				<h1 class="text-2xl font-bold mb-4">Media</h1>
				<div class="flex gap-3 place-items-center">
					<a href={socialInfo.linkedInLink} aria-label="media icon"
						><i class="fa-brands fa-linkedin text-2xl fa-fw"></i></a
					>
					<a href={socialInfo.githubLink} aria-label="media icon"
						><i class="fa-brands fa-github text-2xl fa-fw"></i></a
					>
					<a href="mailto:{socialInfo.email}" aria-label="media icon"
						><i class="fa-solid fa-envelope text-2xl fa-fw"></i></a
					>
				</div>
			</div>
		</div>
		<p class="text-center">
			Copyright© {new Date(Date.now()).getFullYear()}. Developed by Murilo Arelhano
		</p>
	</div>
</footer>
