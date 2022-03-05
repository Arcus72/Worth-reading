import CrossIcon from '@assets/svg/CrossIcon';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { NormalTextSize } from '@style/zmienneCss';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
const StyledWrapper = styled.div`
  @media (min-width: 700px) {
    width: 35%;
  }
  @media (max-width: 699px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid #8f8f9d;
  border-radius: 0.5rem;

  padding: 0.4rem;
  outline: none;
  width: 100%;

  @media (min-width: 700px) {
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0;
    &:hover,
    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.main};
      border-radius: none;
    }
  }
  @media (max-width: 699px) {
    &:hover,
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.main};
      border-radius: 0.5rem;
    }
  }
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

const StyledCrossField = styled.span`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  svg {
    width: 15px;
    @media (min-width: 700px) {
      width: 20px;
    }
  }
`;

interface StyledSearchResultsProps {
  isVisible: boolean;
}

const StyledSearchResults = styled.div<StyledSearchResultsProps>`
  overflow: hidden;
  height: ${(props) => (props.isVisible ? 'auto' : '0px')};
  padding: ${(props) => (props.isVisible ? '1rem' : '0px')};
  position: absolute;
  bottom: 0%;
  left: 1%;
  width: 98%;
  border-radius: 0% 0% 10px 10px;
  background: #283542;
  color: white;
  transform: translateY(100%);
  z-index: 100;
`;

const StyledDataListHeader = styled.h3`
  ${NormalTextSize(2.8)}
`;

const StyledDataListEntry = styled.div`
  ${NormalTextSize()}
  cursor:pointer;
  &::before {
    content: '-';
    color: white;
  }
`;

const StyledLine = styled.div`
  height: 2px;
  background: gray;
  margin: 1rem;
`;

const AnimatedLoader = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%{
    top: 24px;
    height: 32px;
  }
  100% {
    top: 24px;
    height: 32px;
  }
`;

const StyledLoader = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  & div {
    display: inline-block;
    position: absolute;

    width: 10px;
    background: #fff;
    animation: ${AnimatedLoader} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 28px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 48px;
    animation-delay: 0;
  }
`;

interface Author {
  name: string;
}

interface Book {
  title: string;
}

function MainSearchInput() {
  const [graphCMS] = useState(new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT)));
  const [inputValue, setInputValue] = useState('');
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [foundBooks, setFoundBooks] = useState<Book[]>([]);
  const [foundAuthors, setFoundAuthors] = useState<Author[]>([]);

  useEffect(() => {
    setIsLoaderVisible(true);
    const fetchMyApi = async () => {
      try {
        const { books, authors } = await graphCMS.request(`
       query Details{
        authors(where: {name_contains: "${inputValue}"}, first: 4) {
          name
        }
        books(where: {title_contains: "${inputValue}"}, first: 4) {
          title
        }
      }
    `);

        setIsLoaderVisible(false);
        setFoundAuthors(authors);
        setFoundBooks(books);
      } catch (error) {
        console.log(error);
      }
    };

    if (inputValue) {
      setFoundAuthors([]);
      setFoundBooks([]);
      fetchMyApi();
    }
  }, [graphCMS, inputValue]);

  return (
    <StyledWrapper>
      <StyledInput
        list='MainSearchInputDatalist'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='Enter book or author'
      />
      <StyledCrossField onClick={() => setInputValue('')}>
        <CrossIcon isVisible={!!inputValue} />
      </StyledCrossField>

      <StyledSearchResults isVisible={!!inputValue}>
        {isLoaderVisible && (
          <StyledLoader>
            <div></div>
            <div></div>
            <div></div>
          </StyledLoader>
        )}

        {foundBooks.length != 0 && (
          <>
            <StyledDataListHeader> Books:</StyledDataListHeader>
            {foundBooks.map((book) => (
              <Link key={book.title} passHref href={'/' + book.title.replaceAll('.', '_').replaceAll(' ', '-')}>
                <StyledDataListEntry onClick={() => setInputValue('')}>{book.title}</StyledDataListEntry>
              </Link>
            ))}
            <StyledLine></StyledLine>
          </>
        )}

        {foundAuthors.length != 0 && (
          <>
            <StyledDataListHeader> Authors:</StyledDataListHeader>
            {foundAuthors.map((author) => (
              <Link key={author.name} passHref href={'/authors/' + author.name.replaceAll('.', '_').replaceAll(' ', '-')}>
                <StyledDataListEntry onClick={() => setInputValue('')}>{author.name}</StyledDataListEntry>
              </Link>
            ))}
          </>
        )}
      </StyledSearchResults>
    </StyledWrapper>
  );
}

export default MainSearchInput;
