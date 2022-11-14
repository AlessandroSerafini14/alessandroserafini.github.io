import React from 'react'

import { LanguagesBar, LanguageLine, Dot, List, Language as StyledLanguage } from '#components/Languages/styles'
import { Title, Chip } from '#components/Layout/styles'
import Text from '#components/Text'

import { MiddleAligned } from '#styles'
import { ChipType, Language, LanguageLevel, TextSize } from '#types'

const Languages: React.FC = () => {
  const languages: Language[] = [
    {
      id: 'it',
      name: 'Italian',
      percentage: 60,
      color: '#008C45',
      level: LanguageLevel.C2,
    },
    {
      id: 'en',
      name: 'English',
      percentage: 35,
      color: '#C8102E',
      level: LanguageLevel.B2,
    },
    {
      id: 'fr',
      name: 'French',
      percentage: 5,
      color: '#002654',
      level: LanguageLevel.A1,
    },
  ]

  return (
    <>
      <Title>
        Languages<Chip type={ChipType.DEFAULT}>{`${languages.length}`}</Chip>
      </Title>
      <LanguagesBar>
        {languages.map((language) => (
          <LanguageLine size={language.percentage} color={language.color} key={language.id} />
        ))}
      </LanguagesBar>
      <List>
        {languages.map((language) => (
          <StyledLanguage key={language.id}>
            <MiddleAligned>
              <Dot color={language.color} />
              <Text size={TextSize.SMALL}>
                <strong>{language.name}</strong> {language.level}
              </Text>
            </MiddleAligned>
          </StyledLanguage>
        ))}
      </List>
    </>
  )
}

export default Languages
