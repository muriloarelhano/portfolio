<script>
	import { socialInfo } from '../../../data/social-info';
	import { Linkedin, Github, Mail } from 'lucide-svelte';
</script>

<footer class="mt-12 mb-2 border-t border-t-slate-300 print:hidden">
	<div class="container m-auto my-10 felx flex-col place-items-center">
		<h1 class="text-2xl font-bold mb-4">Social Media</h1>
		<div class="flex gap-3 place-items-center">
			<a href={socialInfo.linkedInLink} aria-label="media icon"><Linkedin /></a>
			<a href={socialInfo.githubLink} aria-label="media icon"><Github /></a>
			<a href="mailto:{socialInfo.email}" aria-label="media icon"><Mail /></a>
		</div>
	</div>
	<p class="text-center mt-4">
		Copyright© {new Date(Date.now()).getFullYear()} Developed by Me
	</p>
</footer>
