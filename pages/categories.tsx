import React from 'react';
import CustomHead from '@comp/CustomPageTitle';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import PageHeader from '@comp/PageHeader';
import styled from 'styled-components';
import { ArticleHeaderTextSize, NormalTextSize } from '@style/zmienneCss';

const StyledCategoryTileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0rem 3rem 0rem;
`;

const StyledCategoryTile = styled.div`
  width: 40%;
  text-align: center;
  margin: 1rem 0.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 500px) {
    width: 130px;
  }
  transition: transform 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    transition: transform 0.3s ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.3rem;
    z-index: -1;
  }
  &::before {
    bottom: 1px;
    background-color: red;
    transform: translateX(100%);
  }

  &::after {
    bottom: 10px;
    background-color: red;
    transform: translateX(-100%);
  }

  &:hover::before,
  &:hover::after {
    transform: translateX(0%);
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  margin: 0.5rem auto;
`;

const StyledPageDescription = styled.p`
  ${NormalTextSize()}
  margin-top: 1rem;
`;

const StyledIcon = styled.img`
  width: 25vw;
  cursor: pointer;
  @media (min-width: 500px) {
    width: 100px;
  }
`;

const StyledCategoryDescription = styled.div`
  ${NormalTextSize()}
  margin-bottom: 4rem;
`;

const StyledTileName = styled.figcaption`
  ${NormalTextSize()}
`;

const StyledCategoryHeader = styled.h3`
  ${ArticleHeaderTextSize()}
`;

export const getStaticProps = async () => {
  const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
  let categories = [];
  try {
    const res = await graphCMS.request(`
  {
    categories {
      description {
        html
      }
      icon {
        url(transformation: {document: {output: {format: png}}})
      }
      name
    }
  }
  `);

    categories = res.categories;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: {
        categories,
      },
    };
  }
};

interface Categories {
  description: {
    html: string;
  };
  icon: {
    url: string;
  };
  name: string;
}

interface Props {
  categories: Categories[];
}

function categories({ categories }: Props) {
  return (
    <>
      <CustomHead title='Categories' />
      <PageHeader title='Categories' />
      <StyledContainer>
        <StyledPageDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque voluptates a! Saepe sequi ea iure, quis fugit ab
          totam placeat odit quibusdam! Modi distinctio ipsam placeat hic consequuntur perspiciatis culpa voluptate laboriosam in
          ipsum eius libero amet quod, ex exercitationem id. Ipsa tenetur officia totam pariatur quaerat quisquam quidem!
        </StyledPageDescription>
        <StyledCategoryTileContainer>
          {categories.map((category) => (
            <StyledCategoryTile key={category.name}>
              <Link passHref href={`/categories#${category.name}`}>
                <figure>
                  <StyledIcon src={category.icon.url} alt={category.name} />
                  <StyledTileName>{category.name}</StyledTileName>
                </figure>
              </Link>
            </StyledCategoryTile>
          ))}
        </StyledCategoryTileContainer>
        <div>
          {categories.map((category, index) => (
            <section key={category.name}>
              <StyledCategoryHeader id={category.name}>
                {index + 1}. {category.name}
              </StyledCategoryHeader>
              <StyledCategoryDescription
                dangerouslySetInnerHTML={{ __html: category.description.html }}
              ></StyledCategoryDescription>
            </section>
          ))}
        </div>
      </StyledContainer>
    </>
  );
}

export default categories;
