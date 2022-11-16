import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import React, { useContext } from "react";
import { AiFillFolder, AiOutlineFile } from "react-icons/ai";

import {
  Row,
  Column,
  ParentRow,
  Avatar,
  Header,
  Experiences as StyledExperiences,
  Box,
} from "#components/Experiences/styles";
import Text from "#components/Text";
import { ExperiencesContext } from "#context/experiences";

import { MiddleAligned } from "#styles";
import { Experience, TextSize } from "#types";

dayjs.extend(relativeTime);

type Props = {
  experienceDetail?: Experience;
};

const Experiences: React.FC<Props> = ({ experienceDetail }) => {
  const { experiences } = useContext(ExperiencesContext);

  const BoxHeader = () => (
    <Header>
      <Avatar src={"/ale-serafini.jpg"} isCircle size={24} />
      <strong>AlessandroSerafini</strong>
      <Text>{`feat(${
        experiences[experiences.length - 1].company.name
      }): professional and personal growth`}</Text>
    </Header>
  );

  return (
    <Box header={<BoxHeader />}>
      <StyledExperiences>
        {experienceDetail ? (
          <>
            <ParentRow>
              <Link href={"/"}>
                <Column>
                  <Text size={TextSize.LARGE}>..</Text>
                </Column>
              </Link>
            </ParentRow>
            <Row>
              <Column>
                <MiddleAligned>
                  <AiOutlineFile />
                  <Text>README.md</Text>
                </MiddleAligned>
              </Column>
              <Column>
                <Text>{`feat(${experienceDetail.company.name}): Read about my experience`}</Text>
              </Column>
              <Column>{dayjs(experienceDetail.startDate).fromNow(true)}</Column>
            </Row>
          </>
        ) : (
          experiences
            .slice(0)
            .reverse()
            .map((experience) => (
              <Row key={experience.id}>
                <Column isFolder>
                  <MiddleAligned>
                    <AiFillFolder />
                    <Link href={`/experience/${experience.id}`}>
                      {experience.company.name}
                    </Link>
                  </MiddleAligned>
                </Column>
                <Column>
                  <Link href={`/experience/${experience.id}`}>
                    {experience.role}
                  </Link>
                </Column>
                <Column>{dayjs(experience.startDate).fromNow(true)}</Column>
              </Row>
            ))
        )}
      </StyledExperiences>
    </Box>
  );
};

export default Experiences;
