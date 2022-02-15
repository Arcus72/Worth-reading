import React from 'react';
import { GraphQLClient } from 'graphql-request';
import DetailsPage, { DataForDetailsPage } from '@comp/DetailsPage';

const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
export const getStaticPaths = async () => {
  const { books } = await graphCMS.request(`
  {
    books {
      title
    }
  }

  `);

  const paths = books.map(({ title }: { title: string }) => {
    title = title.replaceAll('.', '_').replaceAll(' ', '-');

    return {
      params: {
        book: title,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

interface Context {
  params: {
    book: string;
  };
}

export const getStaticProps = async ({ params }: Context) => {
  let bookTitle = params.book;
  bookTitle = bookTitle.replaceAll('_', '.').replaceAll('-', ' ');

  const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
  let book = {
    image: {
      url: '',
    },
    title: '',
    pages: 0,
    categories: [],
    authors: [],
    description: {
      html: '',
    },
  };
  try {
    const res = await graphCMS.request(`
    {
      book(where: {title: "${bookTitle}"}) {
      image {
        url(transformation: {document: {output: {format: jpg}}})
      }
      title
      pages
      categories {
        name
      }
      authors {
        name
      }
      description {
        html
      }
      }
    }
  `);
    book = res.book;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { book: book },
    };
  }
};

interface Props {
  book: {
    title: string;
    pages: number;
    description: {
      html: string;
    };
    image: {
      url: string;
    };
    categories: {
      name: string;
    }[];
    authors: {
      name: string;
    }[];
  };
}

function BookDetail({ book }: Props) {
  const categoriesArr = book.categories.map((category) => {
    return category.name;
  });

  const AuthorsArr = book.authors.map((author) => {
    return author.name;
  });

  const dataForDetailsPage: DataForDetailsPage = {
    title: book.title,
    image: book.image.url,
    info: [
      ['Author', AuthorsArr.join(', ')],
      ['Pages', book.pages],
      ['Categories', categoriesArr.join(', ')],
    ],
    description: book.description,
  };
  return <DetailsPage data={dataForDetailsPage} />;
}

export default BookDetail;
