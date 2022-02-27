import styled from 'styled-components';
import { NormalTextSize, ArticleHeaderTextSize } from '@style/fontType';

export const StyledWrapper = styled.div`
  background: #2c3e50;
  color: white;
  padding: 1rem;
`;

export const StyledHeader = styled.h2`
  ${ArticleHeaderTextSize()};
  text-align: center;
`;

export const StyledIconList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  margin: 2rem auto;
`;

export const StyledSocialIcon = styled.div`
  background: white;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2e3d;
  color: transparent;
  position: relative;
  z-index: 1;
  overflow: hidden;

  svg {
    width: 32px;
    height: 32px;
  }
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.4s ease-in-out;
  }

  &:first-child::before {
    transform: scale(0.5) translate(-110%, -110%);
    background-color: #3b5998;
  }

  &:nth-child(2)::before {
    transform: scale(0.5) translate(110%, 110%);
    background-color: #c4302b;
  }

  &:last-child::before {
    transform: scale(0.5) translate(110%, -110%);
    background-color: #00acee;
  }

  &:hover {
    &::before {
      transform: scale(1) translate(0%, 0%);
    }
  }
`;

export const StyledNavigation = styled.nav`
  margin: 3rem 0;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledListItem = styled.li`
  ${NormalTextSize()};
  list-style-type: none;
  margin-left: -2px;
  padding: 0.5rem 1.5rem;
  border-left: 2px solid white;
  border-right: 2px solid white;
  transition: border-left 0.4s ease-in-out, border-right 0.4s ease-in-out;
  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    border-left: 2px solid ${(props) => props.theme.colors.main};
    border-right: 2px solid ${(props) => props.theme.colors.main};
    z-index: 100;
  }
`;
