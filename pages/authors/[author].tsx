import React from 'react';
import { GraphQLClient } from 'graphql-request';
import DetailsPage, { DataForDetailsPage } from '@comp/DetailsPage';

const graphCMS = new GraphQLClient(String(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT));
export const getStaticPaths = async () => {
  const { authors } = await graphCMS.request(`
  {
    authors {
      name
    }
  }

  `);

  const paths = authors.map(({ name }: { name: string }) => {
    name = name.replaceAll('.', '_').replaceAll(' ', '-');

    return {
      params: {
        author: name,
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
    author: string;
  };
}
interface Author {
  name: string;
  description: {
    html: string;
  };
  image: {
    url: string;
  };
  books: string[];
  categories: Categories[];
}

export const getStaticProps = async ({ params }: Context) => {
  let authorName = params.author;
  authorName = authorName.replaceAll('_', '.').replaceAll('-', ' ');
  let author = {
    name: '',
    description: {
      html: '',
    },
    image: {
      url: '',
    },
    books: 0,
    categories: [],
  };
  try {
    const res = await graphCMS.request(`
  {
    author(where: {name:"${authorName}"}) {
      name
      description {
        html
      }
      image {
        url(transformation: {document: {output: {format: jpg}}})
      }
      categories {
        name
      }
      books {
        id
      }
    }
  }
  `);
    author = res.author;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { author: author },
    };
  }
};
interface Categories {
  name: string;
}

interface Author {
  name: string;
  description: {
    html: string;
  };
  image: {
    url: string;
  };
  books: string[];
  categories: Categories[];
}

interface Props {
  author: Author;
}

function AuthorDetails({ author }: Props) {
  const categoriesArr = author.categories.map((category) => {
    return category.name;
  });
  const dataForDetailsPage: DataForDetailsPage = {
    title: author.name,
    image: author.image.url,
    info: [
      ['Books', author.books.length],
      ['Categories', categoriesArr.join(', ')],
    ],
    description: author.description,
  };
  return <DetailsPage data={dataForDetailsPage} />;
}

export default AuthorDetails;
