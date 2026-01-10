export type Project = {
	name: string;
	description: string;
	image: any;
	link: string;
	stack: string[];
	cover?: boolean;
	imageSize?: {
		width?: string;
	};
};

export type SocialInfo = {
	discord: string;
	email: string;
	linkedInLink: string;
	githubLink: string;
};

export type Skills = {
	languages: string[];
	frameworks: string[];
	tools: string[];
	databases: string[];
	other: string[];
};

export type Experience = {
	company: string
	role: string
	period: string
	description?: string[]
	year?: number
	type: 'work' | 'education'
	badge?: string;
};
