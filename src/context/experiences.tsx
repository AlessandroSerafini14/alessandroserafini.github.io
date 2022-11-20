import dayjs from "dayjs";
import React, { cloneElement, createContext } from "react";

import { experiences } from "#constants";
import { Experience } from "#types";

export type IExperiencesContext = {
  getExperienceById: (id: string) => Experience | undefined;
  getDuration: (experience: Experience) => string;
};

export type Props = {
  children: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ExperiencesContext = createContext<IExperiencesContext>();

const ExperiencesProvider: React.FC<Props> = ({ children }) => {
  const getExperienceById = (id: string) =>
    experiences.find((experience) => experience.id === id);

  const getDuration = (experience: Experience) =>
    experience.endDate
      ? dayjs(experience.startDate).from(dayjs(experience.endDate), true)
      : dayjs(experience.startDate).fromNow(true);

  const outputParams = { getExperienceById, getDuration };

  return (
    <ExperiencesContext.Provider value={outputParams}>
      {cloneElement(children, outputParams)}
    </ExperiencesContext.Provider>
  );
};

export default ExperiencesProvider;
