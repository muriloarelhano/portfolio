<script lang="ts">
	import { socialInfo } from '../../../data/social-info';
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import SectionHeader from '../SectionHeader.svelte';
</script>

<section id="contact" class="my-28 px-4 lg:px-0">
	<div class="container m-auto">
		<SectionHeader title={'contact'} />
		<div class="flex flex-col lg:flex-row justify-between w-full my-12 gap-12">
			<div class="flex flex-col lg:basis-1/2">
				<p class="text-xl mb-6 text-zinc-400">
					If you are interested in contacting me, <br class="hidden md:block" /> please check my resume or reach out via social media.
				</p>
				<div class="flex gap-4">
					<a href="/resume" class="btn btn-primary">See Resume</a>
					<a href={socialInfo.linkedInLink} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-square">
						<Linkedin size={22} />
					</a>
					<a href={socialInfo.githubLink} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-square">
						<Github size={22} />
					</a>
				</div>
			</div>
			<div class="flex flex-col p-6 border border-zinc-700 bg-base-200/50 backdrop-blur-sm rounded-lg lg:min-w-[320px]">
				<p class="mb-4 font-bold text-lg">Direct Contact</p>
				<div class="flex items-center gap-3 group">
					<div class="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
						<Mail size={20} />
					</div>
					<a href="mailto:{socialInfo.email}" class="hover:text-primary transition-colors">
						{socialInfo.email}
					</a>
				</div>
				<p class="mt-6 text-xs text-zinc-500 font-mono">Based in Tupi Paulista, SP - Brazil</p>
			</div>
		</div>
	</div>
</section>
