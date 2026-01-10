import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
		company: 'UFMS',
		role: 'Bacharelado em Sistemas de Informação',
		period: 'Jan 2019 - Jul 2023',
		type: 'education'
	},
	{
		company: 'Climatempo',
		role: 'Desenvolvedor Full-stack',
		period: 'Jun 2021 - Out 2022',
		year: 2021,
		type: 'work',
		description: [
			'Desenvolvimento de microsserviços REST, gRPC e GraphQL',
			'Mensageria com RabbitMQ e pipelines CI/CD'
		]
	},
	{
		company: 'Callix',
		role: 'Desenvolvedor Full-stack',
		period: 'Set 2022 - Out 2023',
		year: 2022,
		type: 'work',
		description: [
			'Desenvolvimento Full-stack com Node.js, React e Next.js',
			'Integração com PostgreSQL e APIs REST'
		]
	},
	{
		company: 'Gringo',
		role: 'Engenheiro de Software',
		period: 'Out 2023 - Mai 2025',
		year: 2023,
		type: 'work',
		description: [
			'Desenvolvimento Mobile com React Native',
			'Microsserviços em Node.js e deploy em Google Cloud/K8s'
		]
	},
	{
		company: 'PUC Minas',
		role: 'Especialização em Arquitetura de Soluções',
		period: 'Jan 2024 - Jul 2025',
		type: 'education'
	},
	{
		company: 'Orbe',
		role: 'Desenvolvedor Full-stack',
		period: '2025 - 2026',
		year: 2025,
		type: 'work',
		badge: 'PJ Contractor',
		description: [
			'Backend em Go e Frontend em Next.js',
			'Implementação de LLMs em Python',
			'Modelo de transcrição de áudio Whisper-X'
		]
	},
	{
		company: 'SPS Group',
		role: 'Desenvolvedor de Software Sênior',
		period: 'Mai 2025 - Atualmente',
		type: 'work',
		description: [
			'Liderança técnica em projetos Full-stack',
			'Integração com ecossistema SAP'
		]
	}
];
