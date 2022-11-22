import dayjs from "dayjs";

import {
  Education,
  Experience,
  Language,
  LanguageLevel,
  Publication,
} from "#types";

export const theme = {
  spacing: {
    s100: "8px",
    s200: "16px",
    s300: "24px",
    s400: "32px",
    s500: "40px",
    s600: "48px",
    s700: "56px",
    s800: "64px",
    s900: "72px",
  },
  size: {
    layoutGutter: "24px",
    sidebarWidth: "296px",
  },
  breakpoint: {
    tablet: "544px",
    desktop: "1012px",
  },
  color: {
    headerBg: "#f6f8fa",
    canvasDefault: "#ffffff",
    borderDefault: "#d0d7de",
    accentSubtle: "#ddf4ff",
    fgMuted: "#57606a",
    iconDirectory: "#54aeff",
    fgDefault: "#24292f",
    accentFg: "#0969da",
    neutralMuted: "rgba(175,184,193,0.2)",
    counterBorder: "rgba(0,0,0,0)",
    successFg: "#1a7f37",
    successEmphasis: "#2da44e",
    borderMuted: "hsla(210,18%,87%,1)",
    canvasSubtle: "#f6f8fa",
    headerBorder: "hsla(210,18%,87%,1)",
    actionListItemDefaultHoverBg: "rgba(208,215,222,0.32)",
    primerBorderActive: "#fd8c73",
    btnText: "#24292f",
    btnBg: "#f6f8fa",
    btnBorder: "rgba(27,31,36,0.15)",
    btnShadow: "0 1px 0 rgba(27,31,36,0.04)",
    btnInsetShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
    btnHoverBg: "#f3f4f6",
    btnHoverBorder: "rgba(27,31,36,0.15)",
  },
};

export const experiences: Experience[] = [
  {
    id: "freelancer",
    company: {
      id: "freelance",
      name: "Freelance",
      logo: "/experience/companies/company.svg",
    },
    role: "Web Developer",
    employment: "Fulltime",
    city: "Rimini",
    country: "IT",
    startDate: dayjs("2012-01").toString(),
    endDate: dayjs("2016-12").toString(),
    description:
      "<p>At the age of 20, I was entrusted with the development of the web portal of the Consortium of Viale Ceccarini: the famous avenue of Riccione which is dedicated to shopping, nightlife and entertainment. </p> <p> The main goal of this portal was to better present the shopping facilities that &quot;follow&quot; the walk and to promote events and shows held by the Consortium itself and by the City of Riccione. </p>",
  },
  {
    id: "mr-apps",
    company: {
      id: "mr-apps",
      name: "Mr.APPs",
      logo: "/experience/companies/mr-apps.jpg",
    },
    role: "Front-end Developer & SEO Specialist",
    employment: "Fulltime",
    city: "San Marino",
    country: "RSM",
    startDate: dayjs("2014-01").toString(),
    endDate: dayjs("2020-07").toString(),
    description:
      "<p> Over the course of more than 6 years, I had the opportunity to develop mobile first web applications and mobile apps for several clients, including international ones. </p> <p> During this experience I had the opportunity to deepen my knowledge of the main Javascript Frameworks for Frontend development, such as React, React Native, Angular and Vue. </p>",
  },
  {
    id: "botika",
    company: {
      id: "botika",
      name: "Botika",
      logo: "/experience/companies/botika.jpg",
    },
    role: "Senior Frontend Developer",
    employment: "Fulltime",
    city: "San Marino",
    country: "RSM",
    startDate: dayjs("2020-07").toString(),
    endDate: dayjs("2022-02").toString(),
    description:
      "I held the position of Lead React Developer for more than a year, where I mainly had the pleasure to develop two platforms: Meeters.space: a social network for the management of trade shows and events <ul> <li> Participated in the technical implementation of the React based frontend</li><li>Test-driven development using Jest and React Testing Library</li><li>Working with agile methodologies.</li> </ul> Tiron: A business assistant that manages your agenda and allows your customers to schedule appointments based on your availability synchronized with your calendars. <ul> <li>Supervision and technical support of a team of 3 developers</li><li>Lead the technical implementation of the React based frontend</li><li>Test-driven development using Jest and React Testing Library</li><li>Working with agile methodologies.</li> </ul>",
  },
  {
    id: "veepee",
    company: {
      id: "veepee",
      name: "Veepee",
      url: "https://www.veepee.fr",
      logo: "/experience/companies/veepee.jpg",
    },
    role: "Senior Frontend Engineer",
    employment: "Fulltime",
    city: "Paris",
    country: "FR",
    startDate: dayjs("2022-02").toString(),
    description:
      "Checkout Experience Team - Promotion Dashboard: <ul> <li>Migrated the whole project from Javascript to Typescript</li><li> Developed and released features for managing promotions and vouchers for both Veepee and Privalia users</li><li>Technical interviews for frontend-related positions across the team</li><li>Improve quality and guidelines</li><li>Test-driven development using Jest and React Testing Library.</li> </ul> Post Sales team (Transversal): <ul> <li> Revamp of the user’s order list page and push it to the new website design</li><li>Developed new Components for the design system (KawaUI)</li><li>Test-driven development using Jest and React Testing Library.</li> </ul>",
  },
];

export const publications: Publication[] = [
  {
    id: "js",
    name: "How does JavaScript works under the hood?",
    date: dayjs("2022-02-21").toString(),
    url: "https://medium.com/@aserafini/c6f80291c929",
  },
];

export const educations: Education[] = [
  {
    id: "iti",
    name: "State Institute of Secondary Education Gobetti De Gasperi",
    startDate: dayjs("2007").toString(),
    endDate: dayjs("2011").toString(),
    place: "Morciano di Romagna (IT)",
  },
  {
    id: "php",
    name: "PHP on MySQL",
    startDate: dayjs("2013").toString(),
    place: "Rome (IT)",
  },
  {
    id: "seo",
    name: "Advanced SEO Tool",
    startDate: dayjs("2016").toString(),
    place: "Rimini (IT)",
  },
  {
    id: "uniurb",
    name: "University of Urbino Carlo Bo",
    startDate: dayjs("2017").toString(),
    endDate: dayjs("2020").toString(),
    place: "Urbino (IT)",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "React.js",
  "Web Development",
  "Unit Testing",
  "React testing library",
  "Jest",
  "Redux",
  "Git",
  "styled-components",
  "Storybook",
  "Gitlab-ci",
  "Semantic-release",
  "React Native",
  "Bootstrap",
  "HTML5",
  "jQuery",
  "SCSS",
  "CSS",
];

export const languages: Language[] = [
  {
    id: "it",
    name: "Italian",
    percentage: 60,
    color: "#008C45",
    level: LanguageLevel.C2,
  },
  {
    id: "en",
    name: "English",
    percentage: 35,
    color: "#C8102E",
    level: LanguageLevel.B2,
  },
  {
    id: "fr",
    name: "French",
    percentage: 5,
    color: "#002654",
    level: LanguageLevel.A1,
  },
];
