<script lang="ts">
	import resumePic from '$lib/assets/resume-pic.jpg';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';

	async function generatePDF() {
		window.print();
	}
</script>

<Header />

<main>
	<div class="container">
		<div class="print:w-[1920px]">
			<div class="flex place-content-between items-center">
				<div class="flex gap-4">
					<img src={resumePic} alt="" width="125" class="rounded-md" />
					<div class="flex flex-col gap-6">
						<div>
							<p class="text-2xl font-bold">Murilo Arelhano</p>
							<p>Full Stack Developer</p>
						</div>
						<div class="flex gap-2">
							<div class="badge badge-outline">Back end</div>
							<div class="badge badge-primary badge-outline">Front end</div>
							<div class="badge badge-secondary badge-outline">DevOps</div>
							<div class="badge badge-accent badge-outline">Infra</div>
						</div>
					</div>
				</div>
				<button class="btn btn-primary mb-4 print:hidden" on:click={generatePDF}>pdf</button>
			</div>

			<h1 class="text-3xl font-bold my-4">Profile</h1>
			<p>
				Sou bacharel em Sistemas de Informação, tenho experiência principalmente com plataforma
				NodeJs com Typescript, além de algumas outras linguagens, como Go e .Net/C#. Trabalho com
				desenvolvimento de microsserviços e aplicações web no geral, também estudo bastante sobre
				outras áreas como segurança da informação, DevOps e desenvolvimento de games.
			</p>
			<hr class="my-4" />

			<h1 class="text-3xl font-bold mb-4">Formação Acadêmica</h1>
			<p class="text-sm">Janeiro 2019 - Julho 2023</p>
			<p class="text-xl font-bold">Bacharelado, Universidade Federal de Mato Grosso do Sul</p>
			<p>Sistemas de Informação</p>

			<hr class="my-4" />

			<h1 class="text-3xl font-bold mb-4">Experiência Profissional</h1>
			<p class="text-sm">Janeiro 2020 - Setembro 2021</p>
			<p class="text-xl font-bold mb-4">Freelancer Web Developer</p>
			<ul class="list-disc list-inside ml-4 mb-4">
				<li>Criação de websites estáticos para lojas e divulgação com HTML, CSS e Js puros.</li>
				<li>Modificações visuais em aplicações existentes.</li>
			</ul>

			<p class="text-sm">Setembro 2021 - Outubro 2022</p>
			<p class="text-xl font-bold mb-4">Desenvolvedor full-stack, Climatempo</p>
			<ul class="list-disc list-inside ml-4">
				<li>
					Desenvolvimento completo web services e micros serviços em NodeJs com ExpressJs, no padrão
					REST API, gRPC e GraphQL.
				</li>
				<li>Desenvolvimento seguindo padrões arquiteturais como Hexagonal Architecture e SOLID.</li>
				<li>Criação de pipelines CI/CD e deploy de aplicações em ambiente Kubernetes.</li>
				<li>Criação e modelagem de bancos de dados SQL e NoSQL e integrações.</li>
				<li>
					Implantação de ferramentas de monitoramento e observabilidade das aplicações, com Grafana,
					Prometheus, Graylog e Istio.
				</li>
				<li>Criação de aplicações com uso de filas de mensageira, como RabbitMQ.</li>
				<li>Desenvolvimento de teste de unitários e de integração nas aplicações.</li>
			</ul>

			<p class="text-sm mt-4">Setembro 2021 - Atualmente</p>
			<p class="text-xl font-bold mb-4">Desenvolvedor full-stack, Callix</p>
			<ul class="list-disc list-inside ml-4">
				<li>Desenvolvimento de aplicações full-stack em NodeJs/ReactJs com Typescript.</li>
			</ul>
		</div>
	</div>
</main>

<Footer />

<style>
	@page {
		margin-top: 1cm;
		margin-bottom: 0;
	}
</style>
