import GoDevRel from '$lib/assets/desenvolvedor-de-software.png';
import Portfolio from '$lib/assets/portfolio.png';
import Callix from '$lib/assets/logo-calix.png';

interface ProjectImageProps {
	stack: string[];
	name: string;
	description: string;
	link: string;
	image: any;
	cover?: boolean;
	imageSize?: {
		width?: string;
	};
}

export const projects: ProjectImageProps[] = [
	{
		name: 'Callix',
		description: 'Callix is an SaaS platform, multi-channel, contact center system',
		image: Callix,
		link: 'https://www.callix.com.br/',
		imageSize: {
			width: '200'
		},
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
export const smallProjects: ProjectImageProps[] = [
	{
		name: 'Portfolio',
		description: 'My personal portfolio',
		image: Portfolio,
		link: 'https://muriloarelhano.com.br',
		imageSize: {
			width: '95%'
		},
		stack: ['Svelte', 'SvelteKit', 'Tailwind', 'DaisyUI', 'Cloudflare Pages']
	}
];
