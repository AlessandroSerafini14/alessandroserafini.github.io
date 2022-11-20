import dayjs from "dayjs";
import React from "react";
import { IoMdSchool } from "react-icons/io";

import ItemsList from "#components/ItemsList";
import { Title, Chip } from "#components/Layout/styles";

import { educations } from "#constants";
import { ChipType } from "#types";

const Educations: React.FC = () => {
  const items = educations
    .slice(0)
    .reverse()
    .map((education) => ({
      id: education.id,
      title: education.name,
      subtitle: `${dayjs(education.startDate).format("YYYY")} ${
        education.endDate ? ` - ${dayjs(education.endDate).format("YYYY")}` : ""
      } - ${education.place}`,
      icon: <IoMdSchool />,
    }));
  return (
    <>
      <Title>
        Educations<Chip type={ChipType.DEFAULT}>{`${educations.length}`}</Chip>
      </Title>
      <ItemsList items={items} />
    </>
  );
};

export default Educations;
