import React from "react";

import {
  LanguagesBar,
  LanguageLine,
  Dot,
  List,
  Language as StyledLanguage,
} from "#components/Languages/styles";
import { Title, Chip } from "#components/Layout/styles";
import Text from "#components/Text";

import { languages } from "#constants";
import { MiddleAligned } from "#styles";
import { ChipType, TextSize } from "#types";

const Languages: React.FC = () => {
  return (
    <>
      <Title>
        Languages<Chip type={ChipType.DEFAULT}>{`${languages.length}`}</Chip>
      </Title>
      <LanguagesBar>
        {languages.map((language) => (
          <LanguageLine
            size={language.percentage}
            color={language.color}
            key={language.id}
          />
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
  );
};

export default Languages;
