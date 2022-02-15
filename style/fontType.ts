import styled, { css } from 'styled-components';

export const NormalTextSize = (size = 1.8) => css`
  font-family: 'Times New Roman', Times, serif;
  font-size: ${size}rem;
  line-height: 1.3;

  @media (min-width: 700px) {
    font-size: ${size + 0.2}rem;
  }
`;

export const ArticleHeaderTextSize = (size = 2.5) => css`
  font-size: ${size}rem;
  font-family: 'Averia Serif Libre', cursive;
  margin: 1rem;
  @media (min-width: 700px) {
    font-size: ${size + 1.5}rem;
  }
`;
