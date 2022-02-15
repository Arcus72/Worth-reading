import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 1.7rem;
  border-bottom: 2px solid gray;
  max-width: 1000px;
  padding: 2rem 2rem 0.2rem 2rem;
  font-family: 'Averia Serif Libre', cursive;

  @media (min-width: 700px) {
    font-size: 2.5rem;
  }
`;

interface Props {
  title: string;
}
function PageHeader({ title }: Props) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
}

export default PageHeader;
