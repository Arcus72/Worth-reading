# Worth-reading

A website with book reviews and author overviews.
👉 [Live Demo](https://worth-reading-eta.vercel.app/)

## Features

- Browsing reviews with filtering options
- Author overview
- Ability to add your own book/review (feature currently disabled)

---

## Installation and Setup

### Installation

Install dependencies:

```bash
npm install
```

### Running the Server

Start the development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

### Database Connection

To connect the project with a Hygraph database, insert the **endpoint** API link in the `.env` file.
By default, this project is connected to a mock database.

---

## Database

This project uses **Hygraph** as the database.

You can clone the mock database here:
[Hygraph Mock Database](https://app.hygraph.com/clone/e6468ea971d74664b2ff19793273a4bc?name=warto-czytac)

### Project Tables

- **author** – contains information about authors: name, description, books, categories, image
- **book** – contains information about books: title, description, number of pages, year of publication, categories, authors, image
- **category** – contains category details: name, description, icon

---

## Technologies

- Next.js
- TypeScript
- styled-components
- Formik + Yup
- graphql-request + Hygraph
- ESLint + Prettier

---

## License

This project is licensed under the MIT License.
