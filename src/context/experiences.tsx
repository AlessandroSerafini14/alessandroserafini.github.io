import dayjs from "dayjs";
import React, { cloneElement, createContext } from "react";

import { Experience } from "#types";

export type IExperiencesContext = {
  experiences: Experience[];
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
      id: "xxx",
      company: {
        id: "xxx",
        name: "xxx",
        logo: "/experience/companies/botika.jpg",
      },
      role: "xxx",
      startDate: dayjs("2014-02").toDate(),
    },
    {
      id: "xxx",
      company: {
        id: "xxx",
        name: "xxx",
        logo: "/experience/companies/botika.jpg",
      },
      role: "xxx",
      startDate: dayjs("2014-02").toDate(),
      endDate: dayjs("2014-02").toDate(),
    },
  ];

  const outputParams = { experiences };

  return (
    <ExperiencesContext.Provider value={outputParams}>
      {cloneElement(children, outputParams)}
    </ExperiencesContext.Provider>
  );
};

export default ExperiencesProvider;
