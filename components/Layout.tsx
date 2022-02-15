import Navbar from '@comp/Navbar';
import React from 'react';
import Footer from '@comp/Footer';
import styled from 'styled-components';
import ScrollTopBtn from '@comp/ScrollTopBtn';
import DisplayPath from '@comp/DisplayPath';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.main`
  max-width: 1000px;
  width: 95%;
  margin: 0 auto;
`;

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <StyledWrapper>
      <div>
        <Navbar />
        <StyledContainer>
          <DisplayPath />
          {children}
        </StyledContainer>
      </div>
      <Footer />
      <ScrollTopBtn />
    </StyledWrapper>
  );
}

export default Layout;
