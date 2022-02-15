import Link from 'next/link';
import React, { memo } from 'react';
import {
  StyledDescription,
  StyledDescriptionWrapper,
  StyledEntry,
  StyledLinkBtn,
  StyledPortrait,
  StyledTitle,
} from './Catalog-style';

export interface DataForCatalog {
  image: string;
  title: string;
  info: (string | number)[][];
  link: string;
  btnName: string;
}

interface Props {
  data: DataForCatalog[] | undefined;
}

function Catalog({ data }: Props) {
  if (data === undefined) data = [];

  return (
    <div>
      {data.map((item) => (
        <StyledEntry key={item.title}>
          <StyledPortrait src={item.image} alt={item.title} />

          <StyledDescriptionWrapper>
            <div>
              <StyledTitle>{item.title}</StyledTitle>
              {item.info.map((description, index) => (
                <StyledDescription key={index}>
                  {description[0]}: {description[1]}
                </StyledDescription>
              ))}
            </div>
            <Link passHref href={item.link}>
              <StyledLinkBtn>{item.btnName}</StyledLinkBtn>
            </Link>
          </StyledDescriptionWrapper>
        </StyledEntry>
      ))}
    </div>
  );
}

export default memo(Catalog);
