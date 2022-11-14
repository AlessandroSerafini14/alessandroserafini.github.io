import dayjs from 'dayjs'
import React from 'react'
import { AiOutlineMedium } from 'react-icons/ai'

import ItemsList from '#components/ItemsList'
import { Title, Chip } from '#components/Layout/styles'

import { Item, Publication, ChipType } from '#types'

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 'js',
      name: 'How does JavaScript works under the hood?',
      date: dayjs('2022-02-21').toDate(),
      url: 'https://medium.com/@aserafini/c6f80291c929',
    },
  ]

  const items: Item[] = publications
    .slice(0)
    .reverse()
    .map((publication) => ({
      id: publication.id,
      title: publication.name,
      subtitle: publication.date.toDateString(),
      url: publication.url,
      icon: <AiOutlineMedium />,
    }))
  return (
    <>
      <Title>
        Publications
        <Chip type={ChipType.DEFAULT}>{`${publications.length}`}</Chip>
      </Title>
      <ItemsList items={items} />
    </>
  )
}

export default Publications
