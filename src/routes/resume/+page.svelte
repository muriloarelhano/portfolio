<script lang="ts">
	import Footer from '$lib/components/sections/Footer.svelte';
	import Header from '$lib/components/sections/Header.svelte';

	async function generatePDF() {
		window.print();
	}
</script>

<Header />

<main>
	<div class="container mx-auto text-white">
		<div class="page print:mr-72">
			<div id="resume-title" class="flex place-content-between items-center mb-8">
				<div class="flex gap-4">
					<div class="flex flex-col place-content-between">
						<div>
							<p>Full Stack Developer</p>
							<p class="text-5xl font-bold">Murilo Arelhano</p>
						</div>
					</div>
				</div>
				<button class="btn btn-primary mb-4 print:hidden" onclick={generatePDF}>
					<i class="fa-solid fa-download fw"></i>pdf</button
				>
			</div>

			<div id="resume-container" class="flex gap-10 print:gap-8">
				<div id="resume-main-info" class="basis-8/12">
					<h1 class="text-3xl font-bold text-justify mb-4">Profile</h1>
					<p>
						Sou bacharel em Sistemas de Informação, tenho experiência principalmente com plataforma
						NodeJs com Typescript, além de algumas outras linguagens, como Go. Trabalho com
						desenvolvimento de microsserviços e aplicações web no geral, também estudo bastante
						sobre outras áreas como segurança da informação, DevOps e desenvolvimento de games.
					</p>
					<hr class="my-4" />

					<h1 class="text-3xl font-bold mb-4">Experiência Profissional</h1>

					<p class="text-sm">Setembro 2021 - Outubro 2022</p>
					<p class="text-xl font-bold mb-4">Desenvolvedor full-stack, Climatempo</p>
					<ul class="list-disc list-inside ml-4">
						<li>
							Desenvolvimento serviços e micros serviços em NodeJs no padrão REST, gRPC e GraphQL.
						</li>
						<li>Aplicações com uso de filas de mensageira, com RabbitMQ.</li>
						<li>Desenvolvimento de teste de unitários e de integração.</li>
						<li>Bancos de dados SQL e NoSQL (Diversos).</li>
						<li>Criação de pipelines CI/CD e deploy de aplicações em ambiente Kubernetes.</li>
						<li>
							Implantação de ferramentas de monitoramento e observabilidade, com Grafana,
							Prometheus, Graylog e Istio.
						</li>
						<li>Hexagonal Architecture.</li>
					</ul>

					<p class="text-sm mt-4">Setembro 2022 - Outubro 2023</p>
					<p class="text-xl font-bold mb-4">Desenvolvedor full-stack, Callix</p>
					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvimento de aplicações full-stack em NodeJs/ReactJs com Typescript.</li>
					</ul>

					<p class="text-sm mt-4">Outubro 2023 - Atualmente</p>
					<p class="text-xl font-bold mb-4">Engenheiro de Software II, Gringo</p>

					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvimento de apps mobile em React Native.</li>
						<li>Desenvolvimento micros serviços em NodeJs em Typescript.</li>
					</ul>

					<hr class="my-4" />

					<h1 class="text-3xl font-bold mb-4">Formação Acadêmica</h1>

					<p class="text-sm">Janeiro 2019 - Julho 2023</p>
					<p class="text-xl font-bold">Bacharelado, Sistemas de Informação</p>
					<p>Universidade Federal de Mato Grosso do Sul</p>

					<p class="text-sm mt-4">Janeiro 2024 - Cursando</p>
					<p class="text-xl font-bold">Especialização em Arquitetura de Soluções</p>
					<p>PUC Minas</p>
				</div>
				<div id="resume-side-info" class="flex flex-col place-items-start gap-4">
					<h1 class="text-2xl font-bold">Contact</h1>
					<div class="flex flex-col place-items-start gap-2">
						<div>
							<p class="font-semibold">Endereço</p>
							<p>Tupi Paulista/SP</p>
						</div>
						<div>
							<p class="font-semibold">Número</p>
							<p>(67) 98187-4221</p>
						</div>
						<div>
							<p class="font-semibold">E-mail</p>
							<p>murilo.arelhano@hotmail.com</p>
						</div>
					</div>
					<div>
						<h1 class="text-2xl font-bold mb-4">Competências</h1>
						<ul class="list-disc list-inside">
							<li>Typescript</li>
							<li>Nodejs</li>
							<li>React</li>
							<li>NextJs</li>
							<li>Svelte</li>
							<li>Docker</li>
							<li>CI/CD</li>
							<li>Kubernetes</li>
							<li>Bancos SQL e NoSQL</li>
							<li>Testes unitários</li>
						</ul>
					</div>
					<div>
						<h1 class="text-2xl font-bold mb-4">Outras Competências</h1>

						<ul class="list-disc list-inside">
							<li>Inglês Intermediário</li>
						</ul>
					</div>
					<div class="flex flex-col place-items-start gap-2">
						<h1 class="text-2xl font-bold">Social</h1>
						<div>
							<p class="font-semibold">LinkedIn</p>
							<a href="https://linkedin.com/in/muriloarelhano">linkedin.com/in/muriloarelhano</a>
						</div>
						<div>
							<p class="font-semibold">Personal Website</p>
							<a href="https://muriloarelhano.com.br">muriloarelhano.com.br</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<Footer />

<style>
	@page {
		size: auto;
	}

	@media print {
		.page {
			font-family: Arial, Helvetica, sans-serif;
			width: 230mm;
			color: black;
			margin: 0px;
		}
	}
</style>
