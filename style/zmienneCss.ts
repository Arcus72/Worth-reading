import styled, { css } from 'styled-components';

export const buttonAnimation = () => css`
  position: relative;
  z-index: 1;
  transition: letter-spacing 0.5s, color 0.5s;
  overflow: hidden;

  &:hover {
    letter-spacing: 5px;
    color: white;
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    background: ${(props) => props.theme.colors.main};
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

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
