import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledHeader = styled.div`
  width: fit-content;
  flex: 1;
  font-family: 'Eczar', serif;
  font-size: 1.8rem;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
  @media (min-width: 700px) {
    font-size: 2.6rem;
  }
`;

export const StyledButton = styled.button`
  z-index: 1000;
  margin-right: auto;
  margin-right: 1rem;
  border: none;
  background-color: white;
  width: 32px;
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1px;
  transition: all 0.5s ease;
  @media (min-width: 700px) {
    display: none;
  }
  span {
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 3px;
    background-color: black;
    transition: all 0.5s ease;
  }

  &.active {
    span {
      &:first-child {
        transform: rotateZ(-45deg) translateY(12px);
      }
      &:nth-child(2) {
        transform: translateX(40px);
        opacity: 0;
      }
      &:last-child {
        transform: rotateZ(45deg) translateY(-12px);
      }
    }
  }
`;

export const StyledText = styled.span`
  color: ${(props) => props.theme.colors.main};
`;

export const StyledNav = styled.nav`
  @media (max-width: 699px) {
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    padding-top: 5rem;
    transition: transform 0.5s ease;
    transform: translateX(100%);
    font-size: 2rem;
  }

  &.active {
    transform: translateX(0%);
  }

  @media (min-width: 700px) {
    font-size: 1.6rem;
    width: 100%;
    background-color: #d7d7d7;
    text-align: center;
    font-size: 2.2rem;
  }
`;

export const StyledListItem = styled.li`
  @media (max-width: 699px) {
    font-size: 3.5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
    width: 90%;
    margin: 1rem auto;
    list-style-type: none;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      color: black;
      text-decoration: none;
    }
    &.active {
      border-bottom: 2px solid black;
    }
  }

  @media (min-width: 700px) {
    padding: 0 0.5rem;
    margin: 0.3rem 1rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:before {
      transition: all 0.2s ease-in-out;
      opacity: 0;
      content: '';
      position: absolute;
      border-radius: 20px;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${(props) => props.theme.colors.main};
    }
    &:hover {
      transform: translateY(-2px);
    }
    &:hover::before {
      opacity: 1;
    }
    a {
      color: #505050;
      text-decoration: none;
    }
    &.active {
      & {
        transform: translateY(-2px);
      }
      &::before {
        opacity: 1;
      }
    }
  }
`;

export const StyledList = styled.ul`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
`;

export const StyledPageBanner = styled.h1`
  width: fit-content;
  cursor: pointer;
`;
