/* eslint-disable react-hooks/rules-of-hooks */
import Catalog, { DataForCatalog } from '@comp/Catalog';
import CustomHead from '@comp/CustomPageTitle';
import PageHeader from '@comp/PageHeader';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CatalogNavigation from '@comp/CatalogNavigation';

import styled from 'styled-components';
import { NormalTextSize, ArticleHeaderTextSize, buttonAnimation } from '@style/zmienneCss';

export const getServerSideProps = async ({ query }: Props) => {
  const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
  let amountOfAuthors = 0;
  let authors = [];
  try {
    const res = await graphCMS.request(`


  query AuthorArr{
    authors(where: {name_starts_with: "${query.starts || ''}", name_contains: "${query.contains || ''}"}){
      name
    }
  }
  `);
    amountOfAuthors = res.authors.length;

    const res2 = await graphCMS.request(`
  query Authors{
    authors(first: 4, skip: ${((query.page || 1) - 1) * 4}, where: {name_starts_with: "${query.starts || ''}", name_contains: "${
      query.contains || ''
    }"})
     {
      name
      image {
        url(transformation: {document: {output: {format: jpg}}})
      }
      books {
        title
      }
      categories {
        name
      }
    }
  }
  `);

    authors = res2.authors;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { authors: authors, amountOfAuthors: amountOfAuthors, query: query },
    };
  }
};

const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const StyledFilterBtn = styled.button`
  width: 50%;
  border: 1px solid ${(props) => props.theme.colors.main};
  background: none;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  ${buttonAnimation()}
`;

const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (min-width: 700px) {
    border-right: 1px solid black;
    width: 35%;
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  ${NormalTextSize()}
  padding:0.4rem;
  width: 95%;
  border: none;
  margin-right: 0.5rem;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.main};
  padding: 0.2rem 0.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const StyledAlfabet = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
`;

interface P {
  isSelected: boolean;
  theme: {
    colors: {
      main: string;
    };
  };
}

const StyledLetterTile = styled.span`
  font-size: 1.8rem;
  margin: 0.2rem;
  padding: 1rem;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: P) => (props.isSelected ? '#f1c40f' : props.theme.colors.main)};
`;

interface Props {
  query: {
    starts: string;
    contains: string;
    page: number;
  };
}

interface Categories {
  name: string;
}

interface Author {
  name: string;
  image: {
    url: string;
  };
  books: undefined[];
  categories: Categories[];
}

interface Props {
  authors: Author[];
  amountOfAuthors: number;
}

function Index({ authors, query, amountOfAuthors }: Props) {
  const router = useRouter();
  const alfabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const [rebuildedAuthors, setRebuildedAuthors] = useState<DataForCatalog[]>();
  const [letterForFilter, setLetterForFilter] = useState<string>(query.starts || '');
  const [textForFilter, setTextForFilter] = useState<string>(query.contains || '');
  const [currentPage, setCurrentPage] = useState(query.page || 1);

  useEffect(() => {
    const newAuthors: DataForCatalog[] = authors.map((author) => {
      const categories = author.categories
        .map((category) => {
          return category.name;
        })
        .join(', ');

      return {
        image: author.image.url,
        title: author.name,
        info: [
          ['Books', author.books.length],
          ['Categories', categories],
        ],
        link: 'authors/' + author.name.replaceAll('.', '_').replaceAll(' ', '-'),
        btnName: 'More',
      };
    });
    setRebuildedAuthors(newAuthors);
  }, [authors]);

  const updateUrlQuery = (page = 1) => {
    let query = {};
    if (letterForFilter !== '') query = { ...query, starts: letterForFilter };
    if (textForFilter !== '') query = { ...query, contains: textForFilter };
    if (page !== 1) query = { ...query, page: page };
    router.push({ pathname: '/authors', query: query });
  };

  const updatePageNumber = (page: number) => {
    setCurrentPage(page);
    updateUrlQuery(page);
  };

  return (
    <>
      <CustomHead title='Authors' />
      <PageHeader title='Authors' />
      <StyledContainer>
        <StyledFilter>
          <StyledSearchInput
            placeholder='Find author'
            type='text'
            value={textForFilter}
            onChange={(e) => setTextForFilter(e.target.value)}
          />

          <StyledAlfabet>
            {alfabet.map((letter) => (
              <StyledLetterTile
                key={letter}
                onClick={() => setLetterForFilter(letter == letterForFilter ? '' : letter)}
                isSelected={letterForFilter == letter}
              >
                {letter}
              </StyledLetterTile>
            ))}
          </StyledAlfabet>

          <StyledFilterBtn onClick={() => updateUrlQuery()}>Use filter</StyledFilterBtn>
        </StyledFilter>

        <Catalog
          data={rebuildedAuthors}
          amountOfPages={Math.ceil(amountOfAuthors / 4)}
          currentPage={currentPage}
          changePage={updatePageNumber}
        />
      </StyledContainer>
    </>
  );
}

export default Index;
