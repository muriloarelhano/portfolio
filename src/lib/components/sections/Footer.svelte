<script lang="ts">
	import { socialInfo } from '../../../data/social-info';
	import { Linkedin, Github, Mail } from 'lucide-svelte';

	const currentYear = $derived(new Date().getFullYear());
</script>

<footer class="mt-20 border-t border-zinc-800 bg-base-200/30 py-12 print:hidden px-4 lg:px-0">
	<div class="container m-auto flex flex-col md:flex-row justify-between items-center gap-8">
		<div class="flex flex-col items-center md:items-start">
			<h2 class="text-xl font-bold mb-2">Murilo Arelhano</h2>
			<p class="text-zinc-500 text-sm font-mono">Full-Stack Software Engineer</p>
		</div>

		<div class="flex flex-col items-center">
			<h2 class="text-lg font-bold mb-4">Social Media</h2>
			<div class="flex gap-6 items-center">
				<a href={socialInfo.linkedInLink} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-primary transition-colors" aria-label="LinkedIn">
					<Linkedin size={24} />
				</a>
				<a href={socialInfo.githubLink} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-primary transition-colors" aria-label="GitHub">
					<Github size={24} />
				</a>
				<a href="mailto:{socialInfo.email}" class="text-zinc-400 hover:text-primary transition-colors" aria-label="Email">
					<Mail size={24} />
				</a>
			</div>
		</div>

		<div class="text-center md:text-right">
			<p class="text-zinc-500 text-sm">
				© {currentYear} Developed by Murilo Arelhano
			</p>
			<p class="text-xs text-zinc-600 mt-1">Built with Svelte 5 & Tailwind CSS</p>
		</div>
	</div>
</footer>
