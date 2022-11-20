import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import StandardBox from "#components/Box/Standard";
import Image from "#components/Image";
import Layout from "#components/Layout";
import { ExperiencesContext } from "#context/experiences";
import { MiddleAligned } from "#routes/experienceDetail/styles";

import { experiences } from "#constants";
import { Experience } from "#types";

export default function ExperienceDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { getExperienceById } = useContext(ExperiencesContext);

  const [experienceDetail, setExperienceDetail] = useState<
    Experience | undefined
  >();

  useEffect(() => {
    if (!id) return;
    setExperienceDetail(getExperienceById(id as string));
  }, [id]);

  if (!experienceDetail) return;

  return (
    <>
      <Layout experienceDetail={experienceDetail}>
        <StandardBox>
          <MiddleAligned>
            <Image size={40} isCircle src={experienceDetail.company.logo} />
            <h1>{experienceDetail.role}</h1>
          </MiddleAligned>
          <h2>Details</h2>
          <p>
            {experienceDetail.company.name} · {experienceDetail.employment} ·{" "}
            {experienceDetail.city} ({experienceDetail.country})
          </p>
          <p>
            {`${dayjs(experienceDetail.startDate).format("YYYY")}  - ${
              experienceDetail.endDate
                ? `${dayjs(experienceDetail.endDate).format("YYYY")}`
                : "Current"
            }`}
          </p>
          <h2>Descrption</h2>
          {experienceDetail.description}
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

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
