<script>
	import dots from '$lib/assets/dots.svg';
	import logo from '$lib/assets/logo-outline.svg';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { skills } from '../../../data';
	import SkillsCard from '../SkillsCard.svelte';
</script>

<section id="skills" class="mt-28">
	<div class="container">
		<SectionHeader
			title={'skills'}
			button={{
				label: 'view all',
				link: '/skills'
			}}
		/>
		<div class="flex flex-row place-content-between">
			<div class="relative w-[500px] h-[350px]">
				<img class="absolute left-10 top-16" width="100px" src={dots} alt="dots" />
				<div class="absolute border border-white w-24 h-24 top-4 right-16" />
				<img class="absolute bottom-28 right-36" width="80px" src={dots} alt="dots" />
				<div class="absolute border border-white w-20 h-20 bottom-8 right-0" />
				<img class="absolute bottom-10 left-16" width="100px" src={logo} alt="dots" />
			</div>
			<div class="grid grid-cols-3 gap-8 basis-3/6">
				{#each Object.entries(skills) as [key, value]}
					<SkillsCard title={key.charAt(0).toUpperCase() + key.slice(1)} contents={value} />
				{/each}
			</div>
		</div>
	</div>
</section>
