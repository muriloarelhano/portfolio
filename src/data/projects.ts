import GoDevRel from "$lib/assets/desenvolvedor-de-software.png";
import Portfolio from "$lib/assets/portfolio.png";
import Callix from "$lib/assets/logo-calix-nova.png";
import Gringo from "$lib/assets/logo-gringo-yellow.png";
import Aster from "$lib/assets/aster.png";
import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    name: "Aster",
    descriptionKey: "data.project.aster.description",
    image: Aster,
    link: "https://www.spsgroup.com.br/portal-aster/",
    imageSize: {
      width: "170",
    },
    stack: ["Nodejs", "JavaScript", "React", "PostgreSQL", "SAP B1", "SAP S/4HANA"],
  },
  {
    name: "Gringo",
    descriptionKey: "data.project.gringo.description",
    image: Gringo,
    link: "https://gringo.com.vc/",
    imageSize: {
      width: "170",
    },
    stack: ["React Native", "Typescript", "Nodejs", "Express", "PostgreSQL", "GCP"],
  },
  {
    name: "Callix",
    descriptionKey: "data.project.callix.description",
    image: Callix,
    link: "https://www.callix.com.br/",
    imageSize: {
      width: "220",
    },
    stack: ["Nodejs", "React", "NextJs", "Express", "PostgreSQL"],
  },
  {
    name: "GoDevRel",
    descriptionKey: "data.project.godevrel.description",
    image: GoDevRel,
    link: "https://godevrel.netlify.app/",
    stack: ["Nodejs", "React", "NestJs", "PostgreSQL", "Redis", "Netlify"],
  },

];
export const smallProjects: Project[] = [
  {
    name: "Portfolio",
    descriptionKey: "data.project.portfolio.description",
    image: Portfolio,
    link: "https://muriloarelhano.com.br",
    imageSize: {
      width: "95%",
    },
    stack: ["Svelte", "SvelteKit", "Tailwind", "DaisyUI", "Cloudflare Pages"],
  },
];
