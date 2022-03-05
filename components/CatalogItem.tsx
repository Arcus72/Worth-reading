import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ArticleHeaderTextSize, NormalTextSize, buttonAnimation } from '@style/zmienneCss';

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  height: 100%;
`;

const StyledPortrait = styled.img`
  height: 230px;
  width: 150px;
  @media (min-width: 700px) {
    height: 260px;
    width: 190px;
  }
`;

const StyledDescription = styled.div`
  margin-left: 1rem;
  ${NormalTextSize(1.6)}
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

const StyledTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  width: 100%;
  margin-left: 0.5rem;
  ${ArticleHeaderTextSize(2)}
`;

const StyledLinkBtn = styled.button`
  background: white;
  border: 2px solid ${(props) => props.theme.colors.main};
  text-align: center;
  padding: 0.3rem;
  width: 60%;
  margin: 0px auto;
  margin-bottom: 2rem;
  cursor: pointer;
  ${buttonAnimation()}
  ${NormalTextSize()}
`;

interface DataForCatalog {
  image: string;
  title: string;
  info: (string | number)[][];
  link: string;
  btnName: string;
}

interface Props {
  data: DataForCatalog;
}

function CatalogItem({ data }: Props) {
  return (
    <StyledWrapper>
      <StyledPortrait src={data.image} alt={data.title} />

      <StyledDescriptionWrapper>
        <div>
          <StyledTitle>{data.title}</StyledTitle>
          {data.info.map((description, index: number) => (
            <StyledDescription key={index}>
              {description[0]}: {description[1]}
            </StyledDescription>
          ))}
        </div>
        <Link passHref href={data.link}>
          <StyledLinkBtn>{data.btnName}</StyledLinkBtn>
        </Link>
      </StyledDescriptionWrapper>
    </StyledWrapper>
  );
}

export default CatalogItem;
