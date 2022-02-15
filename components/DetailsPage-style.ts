import { NormalTextSize, ArticleHeaderTextSize } from '@style/fontType';
import styled from 'styled-components';
import prismBackground from '@assets/img/prism.png';
export const StyledWrapper = styled.div`
  margin-top: 2rem;
`;

export const StyledBasicInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    align-items: start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: fit-content 1fr fit-content;
    row-gap: 10px;
    grid-template-columns: 28% 1fr 1fr;
    grid-template-rows: 28% 1fr 1fr;
    max-height: 375px;
  }
`;

export const StyledImgField = styled.div`
  @media (min-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;

export const StyledBanner = styled.div`
  background-image: url(${prismBackground.src});
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  ${ArticleHeaderTextSize()}
  margin: 0;
  padding: 1rem 0.2rem;

  @media (min-width: 700px) {
    padding: 2.5rem 0.2rem;
    ${ArticleHeaderTextSize(0.8)}
    margin: 0;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
  }
`;

export const StyledInformation = styled.div`
  padding: 1rem;
  ${NormalTextSize(2)}
  @media (min-width: 700px) {
    ${NormalTextSize(2.5)}
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;

export const StyledImage = styled.img`
  height: 60vh;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledDescription = styled.div`
  margin: 3rem 5rem;
  ${NormalTextSize()}
`;
