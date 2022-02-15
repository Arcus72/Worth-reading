import styled from 'styled-components';
import { ArticleHeaderTextSize, NormalTextSize } from '@style/fontType';

export const StyledPortrait = styled.img`
  height: 230px;
  width: 150px;
  @media (min-width: 700px) {
    height: 260px;
    width: 190px;
  }
`;

export const StyledEntry = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const StyledDescription = styled.div`
  margin-left: 1rem;
  ${NormalTextSize(1.6)}
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const StyledTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  width: 100%;
  margin-left: 0.5rem;
  ${ArticleHeaderTextSize(2)}
`;

export const StyledLinkBtn = styled.button`
  background: white;
  border: 2px solid ${(props) => props.theme.colors.main};
  text-align: center;
  padding: 0.3rem;
  width: 60%;
  margin: 0px auto;
  margin-bottom: 2rem;
  cursor: pointer;
  ${NormalTextSize()}
  transition: letter-spacing 0.5s;
  &:hover {
    letter-spacing: 5px;
  }
`;
