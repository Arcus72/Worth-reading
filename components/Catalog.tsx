import React, { memo } from 'react';
import CatalogItem from './CatalogItem';
import styled from 'styled-components';
import { ArticleHeaderTextSize } from '@style/fontType';
import CatalogNavigation from '@comp/CatalogNavigation';

export interface DataForCatalog {
  image: string;
  title: string;
  info: (string | number)[][];
  link: string;
  btnName: string;
}

const StyledMessage = styled.div`
  ${ArticleHeaderTextSize(1.8)}
  margin:1rem auto;
  text-align: center;
  color: gray;
`;

const StyledWrapper = styled.div`
  font-size: 3rem;
  margin-left: 2rem;
  @media (min-width: 700px) {
    width: 65%;
  }
`;

interface Props {
  data: DataForCatalog[] | undefined;
  amountOfPages: number;
  currentPage: number;
  changePage: (arg0: number) => void;
}

function Catalog({ data, amountOfPages, currentPage, changePage }: Props) {
  return (
    <StyledWrapper>
      {data?.length ? (
        <div>
          {data.map((item) => (
            <CatalogItem key={item.title} data={item} />
          ))}
          <CatalogNavigation amountOfPages={amountOfPages} currentPage={currentPage} changePage={changePage} />
        </div>
      ) : (
        <StyledMessage>Nothing found</StyledMessage>
      )}
    </StyledWrapper>
  );
}

export default memo(Catalog);
