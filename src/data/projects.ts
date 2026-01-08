import GoDevRel from "$lib/assets/desenvolvedor-de-software.png";
import Portfolio from "$lib/assets/portfolio.png";
import Callix from "$lib/assets/logo-calix-nova.png";
import Gringo from "$lib/assets/logo-gringo-yellow.png";
import Aster from "$lib/assets/aster.png";
import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    name: "Aster",
    description:
      "Aster is an integration platform built to connect web applications to SAP (B1 and S/4HANA), providing data sync, APIs and business workflows.",
    image: Aster,
    link: "https://www.spsgroup.com.br/portal-aster/",
    imageSize: {
      width: "170",
    },
    stack: ["Nodejs", "JavaScript", "React", "PostgreSQL", "SAP B1", "SAP S/4HANA"],
  },
  {
    name: "Gringo",
    description:
      "Gringo is an app that was born to simplify the life of the Brazilian driver.",
    image: Gringo,
    link: "https://gringo.com.vc/",
    imageSize: {
      width: "170",
    },
    stack: ["React Native", "Typescript", "Nodejs", "Express", "PostgreSQL", "GCP"],
  },
  {
    name: "Callix",
    description:
      "Callix is an SaaS platform, multi-channel, contact center system",
    image: Callix,
    link: "https://www.callix.com.br/",
    imageSize: {
      width: "220",
    },
    stack: ["Nodejs", "React", "NextJs", "Express", "PostgreSQL"],
  },
  {
    name: "GoDevRel",
    description: "Project created to help Developer Relations professionals",
    image: GoDevRel,
    link: "https://godevrel.netlify.app/",
    stack: ["Nodejs", "React", "NestJs", "PostgreSQL", "Redis", "Netlify"],
  },

];
export const smallProjects: Project[] = [
  {
    name: "Portfolio",
    description: "My personal portfolio",
    image: Portfolio,
    link: "https://muriloarelhano.com.br",
    imageSize: {
      width: "95%",
    },
    stack: ["Svelte", "SvelteKit", "Tailwind", "DaisyUI", "Cloudflare Pages"],
  },
];
