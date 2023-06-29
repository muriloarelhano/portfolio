import GoDevRel from '$lib/assets/desenvolvedor-de-software.png';
import Portfolio from '$lib/assets/portfolio.png';
import Callix from '$lib/assets/logo-calix.png';

export const projects = [
	{
		name: 'Callix',
		description: 'Callix is an SaaS platform, multi-channel, contact center system',
		image: Callix,
		link: 'https://www.callix.com.br/',
		imgWidthPx: 200,
		stack: ['Nodejs', 'React', 'Express', 'PostgreSQL']
	},
	{
		name: 'GoDevRel',
		description: 'Project created to help Developer Relations professionals',
		image: GoDevRel,
		link: 'https://godevrel.netlify.app/',
		stack: ['Nodejs', 'React', 'NestJs', 'PostgreSQL', 'Redis', 'Netlify']
	}
];
export const smallProjects = [
	{
		name: 'Portfolio',
		description: 'My personal portfolio',
		image: Portfolio,
		link: 'https://muriloarelhano.com.br',
		stack: ['Svelte', 'SvelteKit', 'Tailwind', 'DaisyUI', 'Cloudflare Pages']
	}
];
