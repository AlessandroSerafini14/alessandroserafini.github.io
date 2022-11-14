import React from "react";

import { Title } from "#components/Layout/styles";
import { Chip } from "#components/Skills/styles";

import { ChipType } from "#types";

const Skills: React.FC = () => {
  const skills: string[] = [
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

  return (
    <>
      <Title>Skills</Title>
      {skills.map((skill) => (
        <Chip key={skill} type={ChipType.PRIMARY}>
          {skill}
        </Chip>
      ))}
    </>
  );
};

export default Skills;
