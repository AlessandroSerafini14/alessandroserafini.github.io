import dayjs from "dayjs";
import React, { cloneElement, createContext } from "react";

import { Experience } from "#types";

export type IExperiencesContext = {
  getDuration: (experience: Experience) => string;
};

export type Props = {
  children: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ExperiencesContext = createContext<IExperiencesContext>();

const ExperiencesProvider: React.FC<Props> = ({ children }) => {
  const getDuration = (experience: Experience) =>
    experience.endDate
      ? dayjs(experience.startDate).from(dayjs(experience.endDate), true)
      : dayjs(experience.startDate).fromNow(true);

  const outputParams = { getDuration };

  return (
    <ExperiencesContext.Provider value={outputParams}>
      {cloneElement(children, outputParams)}
    </ExperiencesContext.Provider>
  );
};

export default ExperiencesProvider;
