import React from "react";

import {
  Item as StyledItem,
  Break,
  Subtitle,
  MiddleAligned,
  Name,
  Chip,
} from "#components/ItemsList/styles";

import { Item, ChipType, TextSize } from "#types";

type Props = {
  items: Item[];
};

const ItemsList: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <StyledItem key={item.id}>
          <MiddleAligned>
            {item.icon}
            <Name size={TextSize.LARGE}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </Name>
          </MiddleAligned>
          {i === 0 && <Chip type={ChipType.SUCCESS}>Latest</Chip>}
          <Break />
          <Subtitle size={TextSize.SMALL}>{item.subtitle}</Subtitle>
        </StyledItem>
      ))}
    </>
  );
};

export default ItemsList;
