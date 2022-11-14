import dayjs from "dayjs";
import React, { cloneElement, createContext } from "react";

import { Experience } from "#types";

export type IExperiencesContext = {
  experiences: Experience[];
  getExperienceById: (id: string) => Experience | undefined;
};

export type Props = {
  children: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ExperiencesContext = createContext<IExperiencesContext>();

const ExperiencesProvider: React.FC<Props> = ({ children }) => {
  const experiences: Experience[] = [
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
      startDate: dayjs("2012").toDate(),
      endDate: dayjs("2016").toDate(),
      description: (
        <>
          <p>
            At the age of 20, I was entrusted with the development of the web
            portal of the Consortium of Viale Ceccarini: the famous avenue of
            Riccione which is dedicated to shopping, nightlife and
            entertainment.
          </p>
          <p>
            The main goal of this portal was to better present the shopping
            facilities that &quot;follow&quot; the walk and to promote events
            and shows held by the Consortium itself and by the City of Riccione.
          </p>
        </>
      ),
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
      startDate: dayjs("2014").toDate(),
      endDate: dayjs("2020").toDate(),
      description: (
        <>
          <p>
            Over the course of more than 6 years, I had the opportunity to
            develop mobile first web applications and mobile apps for several
            clients, including international ones.
          </p>
          <p>
            During this experience I had the opportunity to deepen my knowledge
            of the main Javascript Frameworks for Frontend development, such as
            React, React Native, Angular and Vue.
          </p>
        </>
      ),
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
      startDate: dayjs("2020").toDate(),
      endDate: dayjs("2022").toDate(),
      description: (
        <>
          I held the position of Lead React Developer for more than a year,
          where I mainly had the pleasure to develop two platforms:
          Meeters.space: a social network for the management of trade shows and
          events
          <ul>
            <li>
              Participated in the technical implementation of the React based
              frontend
            </li>
            <li>
              Test-driven development using Jest and React Testing Library
            </li>
            <li>Working with agile methodologies.</li>
          </ul>
          Tiron: A business assistant that manages your agenda and allows your
          customers to schedule appointments based on your availability
          synchronized with your calendars.
          <ul>
            <li>Supervision and technical support of a team of 3 developers</li>
            <li>
              Lead the technical implementation of the React based frontend
            </li>
            <li>
              Test-driven development using Jest and React Testing Library
            </li>
            <li>Working with agile methodologies.</li>
          </ul>
        </>
      ),
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
      startDate: dayjs("2022").toDate(),
      description: (
        <>
          Checkout Experience Team Promotion BackOffice:
          <ul>
            <li>Migrated the whole project from Javascript to Typescript</li>
            <li>
              Developed and released features for managing promotions and
              vouchers for both Veepee and Privalia users
            </li>
            <li>Improve quality and guidelines</li>
            <li>
              Test-driven development using Jest and React Testing Library.
            </li>
          </ul>
          Post Sales team (Transversal):
          <ul>
            <li>
              Revamp of the user’s order list page and push it to the new
              website design
            </li>
            <li>Developed new Components for the design system (KawaUI)</li>
            <li>
              Test-driven development using Jest and React Testing Library.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const getExperienceById = (id: string) =>
    experiences.find((experience) => experience.id === id);

  const outputParams = { experiences, getExperienceById };

  return (
    <ExperiencesContext.Provider value={outputParams}>
      {cloneElement(children, outputParams)}
    </ExperiencesContext.Provider>
  );
};

export default ExperiencesProvider;
