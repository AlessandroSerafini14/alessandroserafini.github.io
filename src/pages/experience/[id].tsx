import { ParsedUrlQuery } from "querystring";

import dayjs from "dayjs";
import { GetStaticProps } from "next";
import React from "react";

import StandardBox from "#components/Box/Standard";
import Image from "#components/Image";
import Layout from "#components/Layout";
import { MiddleAligned } from "#routes/experienceDetail/styles";

import { experiences } from "#constants";
import { Experience } from "#types";

type Props = {
  experience: Experience;
};

export default function ExperienceDetail({ experience }: Props) {
  const {
    company,
    employment,
    city,
    country,
    role,
    startDate,
    endDate,
    description,
  } = experience;
  const intro = `${company.name} · ${employment} · ${city} (${country})`;
  const period = `${dayjs(startDate).format("YYYY")}  - ${
    endDate ? `${dayjs(endDate).format("YYYY")}` : "Current"
  }`;

  return (
    <>
      <Layout experienceDetail={experience}>
        <StandardBox>
          <MiddleAligned>
            <Image size={40} isCircle src={company.logo} />
            <h1>{role}</h1>
          </MiddleAligned>
          <h2>Details</h2>
          <p>{intro}</p>
          <p>{period}</p>
          <h2>Descrption</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </StandardBox>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: experiences.map((experience) => ({ params: { id: experience.id } })),
    fallback: false, // can also be true or 'blocking'
  };
}

interface ExperienceDetailParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ExperienceDetailParams;
  const experience = experiences.find((e) => e.id === id);

  return {
    props: { experience },
  };
};
