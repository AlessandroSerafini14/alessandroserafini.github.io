import React from "react";

import { Title } from "#components/Layout/styles";
import { Chip } from "#components/Skills/styles";

import { skills } from "#constants";
import { ChipType } from "#types";

const Skills: React.FC = () => {
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
