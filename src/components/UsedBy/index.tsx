import React, { useContext } from 'react'

import { Title, Chip } from '#components/Layout/styles'
import { Image } from '#components/UsedBy/styles'
import { ExperiencesContext } from '#context/experiences'

import { ChipType, Company } from '#types'
const UsedBy: React.FC = () => {
  const { experiences } = useContext(ExperiencesContext)

  const companies = experiences.map((experience) => experience.company)

  const Logo = ({ company }: { company: Company }) => (
    <Image alt={company.name} size={32} isCircle key={company.id} src={company.logo} />
  )

  return (
    <>
      <Title>
        Used by<Chip type={ChipType.DEFAULT}>{`${companies.length}`}</Chip>
      </Title>
      {companies
        .slice(0)
        .reverse()
        .map((company) =>
          company.url ? (
            <a key={company.id} href={company.url} target="_blank" rel="noreferrer">
              <Logo company={company} />
            </a>
          ) : (
            <Logo key={company.id} company={company} />
          )
        )}
    </>
  )
}

export default UsedBy
