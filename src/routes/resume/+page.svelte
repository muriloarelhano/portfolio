<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { t, tArray } from '$lib/i18n';

	async function generatePDF() {
		window.print();
	}

	// Data de início da primeira experiência: Junho 2021
	const startDate = new Date(2021, 5);
	const today = new Date();
	// Usar o último dia do mês corrente para considerar o mês completo
	const now = new Date(today.getFullYear(), today.getMonth() + 1, 0);
	let years = now.getFullYear() - startDate.getFullYear();
	let months = now.getMonth() - startDate.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}

	const pageTitle = $derived($t('meta.resume.title'));
	const pageDescription = $derived($t('meta.resume.description'));
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta
		name="description"
		content={pageDescription}
	/>
</svelte:head>

<main>
	<div class="container mx-auto max-w-screen-xl text-white">
		<div class="page">
			<div id="resume-title" class="flex place-content-between items-center mb-8">
				<div class="flex gap-4">
					<div class="flex flex-col justify-between">
						<div>
							<p class="text-primary font-mono text-sm tracking-wider uppercase mb-1">
								{$t('resume.header.role')}
							</p>
							<h1 class="text-5xl font-black tracking-tight">{$t('common.name')}</h1>
						</div>
					</div>
				</div>
				<button class="btn btn-primary mb-4 print:hidden" onclick={generatePDF}>
					<Download />{$t('button.downloadPdf')}</button
				>
			</div>

			<div id="resume-container" class="flex gap-10 print:gap-8">
				<div id="resume-main-info" class="basis-8/12">
					<p>
						{$t('resume.summary')}
					</p>
					<hr class="my-4" />

					<p class="text-sm">{$t('resume.experience.sps.period')}</p>
					<p class="text-xl font-bold mb-4">{$t('resume.experience.sps.title')}</p>
					<ul class="list-disc list-inside ml-4">
						{#each $tArray('resume.experience.sps.items') as item}
							<li>{item}</li>
						{/each}
					</ul>

					<p class="text-sm mt-4">{$t('resume.experience.gringo.period')}</p>
					<p class="text-xl font-bold mb-4">{$t('resume.experience.gringo.title')}</p>
					<ul class="list-disc list-inside ml-4">
						{#each $tArray('resume.experience.gringo.items') as item}
							<li>{item}</li>
						{/each}
					</ul>

					<p class="text-sm mt-4">{$t('resume.experience.callix.period')}</p>
					<p class="text-xl font-bold mb-4">{$t('resume.experience.callix.title')}</p>
					<ul class="list-disc list-inside ml-4">
						{#each $tArray('resume.experience.callix.items') as item}
							<li>{item}</li>
						{/each}
					</ul>

					<p class="text-sm mt-4">{$t('resume.experience.climatempo.period')}</p>
					<p class="text-xl font-bold mb-4">{$t('resume.experience.climatempo.title')}</p>
					<ul class="list-disc list-inside ml-4">
						{#each $tArray('resume.experience.climatempo.items') as item}
							<li>{item}</li>
						{/each}
					</ul>

					<hr class="my-4" />
				</div>
				<div id="resume-side-info" class="flex flex-col place-items-start gap-4">
					<h1 class="text-2xl font-bold">{$t('resume.contact.title')}</h1>
					<div class="flex flex-col place-items-start gap-2">
						<div>
							<p class="font-semibold">{$t('resume.contact.addressLabel')}</p>
							<p>{$t('resume.contact.addressValue')}</p>
						</div>
						<div>
							<p class="font-semibold">{$t('resume.contact.phoneLabel')}</p>
							<p>{$t('resume.contact.phoneValue')}</p>
						</div>
						<div>
							<p class="font-semibold">{$t('resume.contact.emailLabel')}</p>
							<p>{$t('resume.contact.emailValue')}</p>
						</div>
					</div>
					<div>
						<h1 class="text-2xl font-bold mb-4">{$t('resume.skills.title')}</h1>
						<ul class="list-disc list-inside">
							{#each $tArray('resume.skills.items') as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<div>
						<h1 class="text-2xl font-bold mb-4">{$t('resume.languages.title')}</h1>

						<ul class="list-disc list-inside">
							{#each $tArray('resume.languages.items') as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col place-items-start gap-2">
						<h1 class="text-2xl font-bold">{$t('resume.social.title')}</h1>
						<div>
							<p class="font-semibold">{$t('resume.social.linkedinLabel')}</p>
							<a class="link link-primary" href="https://linkedin.com/in/muriloarelhano"
								>linkedin.com/in/muriloarelhano</a
							>
						</div>
						<div>
							<p class="font-semibold">{$t('resume.social.websiteLabel')}</p>
							<a class="link link-primary" href="https://muriloarelhano.com.br"
								>muriloarelhano.com.br</a
							>
						</div>
					</div>
				</div>
			</div>

			<div id="resume-education">
				<h1 class="text-3xl font-bold mb-4">{$t('resume.education.title')}</h1>
				<div class="flex gap-12">
					<div>
						<p class="text-sm">{$t('resume.education.ufms.period')}</p>
						<p class="text-xl font-bold">{$t('resume.education.ufms.title')}</p>
						<p>{$t('resume.education.ufms.school')}</p>
					</div>
					<div>
						<p class="text-sm">{$t('resume.education.puc.period')}</p>
						<p class="text-xl font-bold">{$t('resume.education.puc.title')}</p>
						<p>{$t('resume.education.puc.school')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	@page {
		size: auto;
	}

	@media print {
		.page {
			font-family: Arial, Helvetica, sans-serif;
			width: 235mm;
			color: black;
			margin: 0px;
		}
	}
</style>
