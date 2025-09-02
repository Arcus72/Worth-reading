import Catalog, { DataForCatalog } from '@comp/Catalog';
import CustomHead from '@comp/CustomPageTitle';
import { GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ArticleHeaderTextSize, buttonAnimation, NormalTextSize } from '@style/zmienneCss';

export const getServerSideProps = async ({ query }: Props) => {
  const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
  let books: any[] = [];
  let categories = [];
  let amountOfBooks = 0;
  try {
    const res1 = await graphCMS.request(`
    {
      books(
      where: {authors_some: {name_contains: "${query.author || ''}"}, title_contains: "${
      query.title || ''
    }", categories_some: {name_contains: "${query.category || ''}"}}
    ){
        title
      }
    }
  `);

    amountOfBooks = res1.books.length;

    const res2 = await graphCMS.request(`
  {


    books(first: 4, skip: ${((query.page || 1) - 1) * 4},
      where: {authors_some: {name_contains: "${query.author || ''}"}, title_contains: "${
      query.title || ''
    }", categories_some: {name_contains: "${query.category || ''}"}}
    ) {
      image {
        url(transformation: {document: {output: {format: jpg}}})
      }
      pages
      title

      authors {
        name
      }
      categories {
        name
      }
    }
    categories {
      name
    }
  }
  `);

    books = res2.books;
    categories = res2.categories;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { books: books, categories: categories, amountOfBooks: amountOfBooks, query: query },
    };
  }
};

export const StyledArticleHeader = styled.h2`
  ${ArticleHeaderTextSize()}
`;

export const StyledArticleDescription = styled.p`
  ${NormalTextSize()}
`;

export const StyledPlaceholder = styled.div`
  background-color: gray;
  height: 300px;
  margin: 2rem 0;
`;

export const StyledBooksContainer = styled.div`
  font-size: 3rem;
  margin-left: 2rem;
  @media (min-width: 700px) {
    width: 65%;
  }
`;

export const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  @media (min-width: 700px) {
    border: none;
    border-right: 1px solid black;
    width: 65%;
    padding: 0.5rem;
  }
`;

export const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const StyledFilterInput = styled.input`
  border: none;
  border: 1px solid ${(props) => props.theme.colors.main};
  ${NormalTextSize()}
  width:100%;
  padding: 0.4rem;
  padding-left: 0.6rem;
`;

export const StyledLabel = styled.label`
  ${NormalTextSize()}
  margin-right: 0.4rem;
  margin-bottom: 1rem;
`;

export const StyledSelectCategory = styled.select`
  width: 100%;
  padding: 0.4rem;
  padding-left: 0.6rem;
  background: none;
  border: none;
  border: 1px solid ${(props) => props.theme.colors.main};
  ${NormalTextSize()}
`;

export const StyledFilterBtn = styled.button`
  width: 50%;
  border: 1px solid ${(props) => props.theme.colors.main};
  background: none;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  ${buttonAnimation()}
`;

interface Author {
  name: string;
}

interface Category {
  name: string;
}

interface Book {
  pages: number;
  title: string;
  image: {
    url: string;
  };
  authors: Author[];
  categories: Category[];
}

interface Props {
  books: Book[];
  categories: {
    name: string;
  }[];
  amountOfBooks: number;
  query: {
    title: string;
    author: string;
    category: string;
    page: number;
  };
}

const convertArrOfObjectToArray = (arr: any[], key: string): string[] => {
  let result = arr.map((item) => {
    return item[key];
  });
  result.sort();
  return result;
};

const Books = ({ books, categories, amountOfBooks, query }: Props) => {
  const [router] = useState(useRouter());
  const [rebuildedBooks, setRebuildedBooks] = useState<DataForCatalog[]>([]);
  const [sortedCategories] = useState(convertArrOfObjectToArray(categories, 'name'));
  const [titleForFilter, setTitleForFilter] = useState(query.title || '');
  const [authorForFilter, setAuthorForFilter] = useState(query.author || '');
  const [categoryForFilter, setCategoryForFilter] = useState(query.category || '');
  const [currentPage, setCurrentPage] = useState(query.page || 1);

  const updateUrlQuery = (page = 1) => {
    let query = {};
    if (titleForFilter !== '') query = { ...query, title: titleForFilter };
    if (authorForFilter !== '') query = { ...query, author: authorForFilter };
    if (categoryForFilter !== '') query = { ...query, category: categoryForFilter };
    if (page !== 1) query = { ...query, page: page };
    router.push({ pathname: '/', query: query });
  };

  const updatePageNumber = (page: number) => {
    setCurrentPage(page);
    updateUrlQuery(page);
  };

  useEffect(() => {
    const newBooks: DataForCatalog[] = books.map((book) => {
      const categories = book.categories
        .map((category) => {
          return category.name;
        })
        .join(', ');

      const authors = book.authors
        .map((category) => {
          return category.name;
        })
        .join(', ');

      return {
        image: book.image.url,
        title: book.title,
        info: [
          ['Author', authors],
          ['Pages', book.pages],
          ['Categories', categories],
        ],
        link: '' + book.title.replaceAll('.', '_').replaceAll(' ', '-'),
        btnName: 'Review',
      };
    });
    setRebuildedBooks(newBooks);
  }, [books]);
  return (
    <>
      <CustomHead title='Books' />
      <article>
        <StyledArticleHeader>Books</StyledArticleHeader>
        <StyledArticleDescription>
          Worth-reading is that site where you can find your next favorite book. And on this journey with your friends you can
          explore new territory, gather information, and expand your mind.
        </StyledArticleDescription>
      </article>
      <StyledContainer>
        <StyledFilter>
          <StyledLabel>
            Book title: <br />
            <StyledFilterInput value={titleForFilter} onChange={(e) => setTitleForFilter(e.target.value)} type='text' />
          </StyledLabel>
          <br />
          <StyledLabel>
            Book author: <br />
            <StyledFilterInput value={authorForFilter} onChange={(e) => setAuthorForFilter(e.target.value)} type='text' />
          </StyledLabel>
          <br />
          <StyledLabel>
            Category: <br />
            <StyledSelectCategory value={categoryForFilter} onChange={(e) => setCategoryForFilter(e.target.value)}>
              <option value=''>-- Choose category-- </option>
              {sortedCategories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </StyledSelectCategory>
          </StyledLabel>
          <br />
          <StyledFilterBtn onClick={() => updateUrlQuery()}>Use filter</StyledFilterBtn>
        </StyledFilter>

        <StyledBooksContainer>
          <Catalog
            amountOfPages={Math.ceil(amountOfBooks / 4)}
            currentPage={currentPage}
            changePage={updatePageNumber}
            data={rebuildedBooks}
          />
        </StyledBooksContainer>
      </StyledContainer>
    </>
  );
};

export default Books;
