import {
  SiGit,
  SiSass,
  SiReact,
  SiFigma,
  SiGithub,
  SiPostman,
  SiVuedotjs,
  SiNextdotjs,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiVisualstudiocode,
} from "@icons-pack/react-simple-icons";

import { IToolType } from "@/types/tool";

export const techStacks: IToolType[] = [
  {
    name: "Javascript",
    description:
      "A programming language commonly used to develop interactive web applications.",
    icon: SiJavascript,
    icon_color: "#F7DF1E",
  },
  {
    name: "Typescript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    icon: SiTypescript,
    icon_color: "#3178C6",
  },
  {
    name: "React Js",
    description:
      "My favorite library for web and native user interfaces. Simple and elegant.",
    icon: SiReact,
    icon_color: "#61DAFB",
  },
  {
    name: "Next Js",
    description:
      "My favorite React Framework to build a website. Support SSR and SEO friendly.",
    icon: SiNextdotjs,
    icon_color: "#000000",
  },
  {
    name: "Vue Js",
    description: "The progressive JavaScript Framework.",
    icon: SiVuedotjs,
    icon_color: "#4FC08D",
  },
  {
    name: "React Native",
    description:
      "Create native app for android and ios, and more using React code.",
    icon: SiReact,
    icon_color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design.",
    icon: SiTailwindcss,
    icon_color: "#06B6D4",
  },
  {
    name: "Bootstrap CSS",
    description:
      "A build in components that help developers create consistent and well-designed UI with ease.",
    icon: SiBootstrap,
    icon_color: "#7952B3",
  },
  {
    name: "Styled Component",
    description:
      "The result of wondering how we could enhance CSS for styling React component systems.",
    icon: SiStyledcomponents,
    icon_color: "#DB7093",
  },
  {
    name: "SASS",
    description: "Writing CSS with super power and reusable.",
    icon: SiSass,
    icon_color: "#CC6699",
  },
];

export const appsAndServices: IToolType[] = [
  {
    name: "Git",
    description:
      "The best tool for source code management, easy to use and widely used.",
    icon: SiGit,
    icon_color: "#F05032",
  },
  {
    name: "VS Code",
    description:
      "My favorite editor to write code, easy to customize, many beautiful themes and more.",
    icon: SiVisualstudiocode,
    icon_color: "#007ACC",
  },
  {
    name: "Postman",
    description:
      "An API platform for building and using APIs. Great tool for teamwork.",
    icon: SiPostman,
    icon_color: "#FF6C37",
  },
  {
    name: "Github",
    description:
      "a web-based hosting service that use for version control and collaboration.",
    icon: SiGithub,
    icon_color: "#181717",
  },
  {
    name: "Figma",
    description:
      "A design tool for create beautiful user interface design and more.",
    icon: SiFigma,
    icon_color: "#F24E1E",
  },
];
