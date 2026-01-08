<script lang="ts">
	import { Download } from 'lucide-svelte';

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
</script>

<svelte:head>
	<title>Resume | Murilo Arelhano</title>
	<meta
		name="description"
		content="Professional resume of Murilo Arelhano, a Full-stack Developer with experience in modern web technologies and software architecture."
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
								Desenvolvedor Full-stack
							</p>
							<h1 class="text-5xl font-black tracking-tight">Murilo Arelhano</h1>
						</div>
					</div>
				</div>
				<button class="btn btn-primary mb-4 print:hidden" onclick={generatePDF}>
					<Download />pdf</button
				>
			</div>

			<div id="resume-container" class="flex gap-10 print:gap-8">
				<div id="resume-main-info" class="basis-8/12">
					<p>
						Sou bacharel em Sistemas de Informação e desenvolvedor com foco em Node.js com
						TypeScript, React, NextJs e Go. Atuo na criação de aplicações web, microsserviços e APIs
						como full-stack, sempre focado em escalabilidade, qualidade e boas práticas. Também
						tenho interesses na área segurança da informação e DevOps.
					</p>
					<hr class="my-4" />

					<p class="text-sm">Maio 2025 - Atualmente</p>
					<p class="text-xl font-bold mb-4">Desenvolvedor de Software Sênior, SPS Group</p>
					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvedor de Software Sênior com atuação em backend e frontend.</li>
						<li>Desenvolvimento de soluções full-stack com React.js e NodeJs .</li>
						<li>Arquitetura de sistemas, escalabilidade e boas práticas.</li>
						<li>Integração com SAP (S/4HANA, BusinessOne).</li>
					</ul>

					<p class="text-sm mt-4">Outubro 2023 - Maio 2025</p>
					<p class="text-xl font-bold mb-4">Engenheiro de Software, Gringo</p>
					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvimento de apps mobile em React Native.</li>
						<li>Desenvolvimento microsserviços em Node.js em Typescript.</li>
						<li>Integração com banco de dados PostgreSQL e serviços do Firebase</li>
						<li>Implantação de ferramentas de monitoramento com New Relic e Prometheus</li>
						<li>Deploys das aplicações em ambiente Kubernetes na Google Cloud</li>
					</ul>

					<p class="text-sm mt-4">Setembro 2022 - Outubro 2023</p>
					<p class="text-xl font-bold mb-4">Desenvolvedor Full-stack, Callix</p>
					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvimento de aplicações full-stack em Node.js, ReactJs e NextJs.</li>
						<li>Integração do back-end com banco de dados PostgreSQL.</li>
						<li>Desenvolvimentos de APIs no padrão REST.</li>
					</ul>

					<p class="text-sm mt-4">Junho 2021 - Outubro 2022</p>
					<p class="text-xl font-bold mb-4">Desenvolvedor Full-stack, Climatempo</p>
					<ul class="list-disc list-inside ml-4">
						<li>Desenvolvimento micros serviços em Node.js no padrão REST, gRPC e GraphQL.</li>
						<li>Implantação de filas de mensageira com RabbitMQ.</li>
						<li>Criação de teste de unitários e de integração.</li>
						<li>
							Criação de pipelines CI/CD, automatizando deploy de aplicações em ambiente Kubernetes.
						</li>
						<li>Implantação de ferramentas de monitoramento e observabilidade</li>
					</ul>

					<hr class="my-4" />
				</div>
				<div id="resume-side-info" class="flex flex-col place-items-start gap-4">
					<h1 class="text-2xl font-bold">Contato</h1>
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
							<li>Typescript e Go</li>
							<li>Node.js</li>
							<li>React</li>
							<li>NextJs</li>
							<li>Docker</li>
							<li>Kubernetes</li>
							<li>CI/CD</li>
							<li>Monitoramento</li>
							<li>Bancos SQL e NoSQL</li>
							<li>PostgreSQL</li>
							<li>Testes unitários</li>
							<li>Integração com LLMs (AI)</li>
						</ul>
					</div>
					<div>
						<h1 class="text-2xl font-bold mb-4">Idiomas</h1>

						<ul class="list-disc list-inside">
							<li>Inglês Intermediário</li>
						</ul>
					</div>
					<div class="flex flex-col place-items-start gap-2">
						<h1 class="text-2xl font-bold">Social</h1>
						<div>
							<p class="font-semibold">LinkedIn</p>
							<a class="link link-primary" href="https://linkedin.com/in/muriloarelhano"
								>linkedin.com/in/muriloarelhano</a
							>
						</div>
						<div>
							<p class="font-semibold">Website Pessoal</p>
							<a class="link link-primary" href="https://muriloarelhano.com.br"
								>muriloarelhano.com.br</a
							>
						</div>
					</div>
				</div>
			</div>

			<div id="resume-education">
				<h1 class="text-3xl font-bold mb-4">Formação Acadêmica</h1>
				<div class="flex gap-12">
					<div>
						<p class="text-sm">Janeiro 2019 - Julho 2023</p>
						<p class="text-xl font-bold">Bacharelado, Sistemas de Informação</p>
						<p>Universidade Federal de Mato Grosso do Sul</p>
					</div>
					<div>
						<p class="text-sm">Janeiro 2024 - Julho 2025</p>
						<p class="text-xl font-bold">Especialização em Arquitetura de Soluções</p>
						<p>PUC Minas</p>
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
