<script>
	import { socialInfo } from '../../../data/social-info';
	import { Mail } from 'lucide-svelte';
	import SectionHeader from '../SectionHeader.svelte';
</script>

<section id="contact" class="my-28">
	<div class="container m-auto">
		<SectionHeader title={'contact'} />
		<div class="flex place-content-between w-full my-12">
			<div class="flex flex-col">
				<p class="text-xl mb-2">
					If you are interested in contacting me, <br /> please check my resume for more information
				</p>
				<a href="/resume">
					<button class="btn btn-primary mt-4">See Resume</button>
				</a>
			</div>
			<div class="flex flex-col p-4 border border-slate-300">
				<p class="mb-4 font-bold">Message me here</p>
				<div class="flex gap-2"><Mail /> {socialInfo.email}</div>
			</div>
		</div>
	</div>
</section>
