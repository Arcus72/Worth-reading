import React from 'react';
import NotFoundSVG from '@assets/svg/NotFoundSVG';
import styled from 'styled-components';
import Link from 'next/link';
import { NormalTextSize } from '@style/zmienneCss';
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${NormalTextSize(2.5)}
  text-decoration:underline;
  cursor: pointer;

  div {
    margin: 2rem;
  }

  svg {
    width: 80%;
  }
`;

function NotFound() {
  return (
    <StyledWrapper>
      <NotFoundSVG />
      <Link passHref href='/'>
        <div>Go to Books</div>
      </Link>
    </StyledWrapper>
  );
}

export default NotFound;
