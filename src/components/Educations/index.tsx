import dayjs from 'dayjs'
import React from 'react'
import { IoMdSchool } from 'react-icons/io'

import ItemsList from '#components/ItemsList'
import { Title, Chip } from '#components/Layout/styles'

import { ChipType, Education } from '#types'

const Educations: React.FC = () => {
  const educations: Education[] = [
    {
      id: 'iti',
      name: 'State Institute of Secondary Education Gobetti De Gasperi',
      startDate: dayjs('2007').toDate(),
      endDate: dayjs('2011').toDate(),
      place: 'Morciano di Romagna (IT)',
    },
    {
      id: 'php',
      name: 'PHP on MySQL',
      startDate: dayjs('2013').toDate(),
      place: 'Rome (IT)',
    },
    {
      id: 'seo',
      name: 'Advanced SEO Tool',
      startDate: dayjs('2016').toDate(),
      place: 'Rimini (IT)',
    },
    {
      id: 'uniurb',
      name: 'University of Urbino Carlo Bo',
      startDate: dayjs('2017').toDate(),
      endDate: dayjs('2020').toDate(),
      place: 'Urbino (IT)',
    },
  ]

  const items = educations
    .slice(0)
    .reverse()
    .map((education) => ({
      id: education.id,
      title: education.name,
      subtitle: `${dayjs(education.startDate).format('YYYY')} ${
        education.endDate ? ` - ${dayjs(education.endDate).format('YYYY')}` : ''
      } - ${education.place}`,
      icon: <IoMdSchool />,
    }))
  return (
    <>
      <Title>
        Educations<Chip type={ChipType.DEFAULT}>{`${educations.length}`}</Chip>
      </Title>
      <ItemsList items={items} />
    </>
  )
}

export default Educations
