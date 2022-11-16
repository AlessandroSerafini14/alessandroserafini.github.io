import React from "react";
import { Element } from "react-scroll";

import Educations from "#components/Educations";
import Experience from "#components/Experiences";
import Header from "#components/Header";
import Languages from "#components/Languages";
import {
  Layout as StyledLayout,
  Left,
  Right,
  Section,
} from "#components/Layout/styles";
import Publications from "#components/Publications";
import Skills from "#components/Skills";
import TopBar from "#components/TopBar";
import UsedBy from "#components/UsedBy";

import { Experience as IExperience } from "#types";

type Props = {
  experienceDetail?: IExperience;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ experienceDetail, children }) => {
  return (
    <>
      <TopBar />
      <Header />
      <StyledLayout>
        <Left>
          <Element name="experience">
            <Experience experienceDetail={experienceDetail} />
            {children}
          </Element>
        </Left>
        <Right>
          <Section name="about">
            <Element name="skills">
              <Skills />
            </Element>
          </Section>
          <Section name="education">
            <Educations />
          </Section>
          <Section name="publication">
            <Publications />
          </Section>
          <Section name="used-by">
            <UsedBy />
          </Section>
          <Section name="languages">
            <Languages />
          </Section>
        </Right>
      </StyledLayout>
    </>
  );
};

export default Layout;
