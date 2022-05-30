import React from 'react';
import CustomHead from '@comp/CustomPageTitle';
import PageHeader from '@comp/PageHeader';
import styled from 'styled-components';
import { ArticleHeaderTextSize, NormalTextSize } from '@style/zmienneCss';

const StyledContainer = styled.div`
  width: 88%;
  margin: 2rem auto;
`;

const StyledContactContainer = styled.div`
  margin-top: 2rem;
  color: hsl(0, 10%, 40%);
`;

const StyledAddressContainer = styled.address`
  font-size: 1.4rem;
  ${NormalTextSize(1.6)}
`;

const PageDescription = styled.p`
  ${NormalTextSize()}
`;

const StyledContactHeader = styled.h3`
  ${ArticleHeaderTextSize()}
`;
function aboutUs() {
  return (
    <>
      <CustomHead title='About Us' />
      <PageHeader title='About Us' />
      <StyledContainer>
        <PageDescription>
          Worth-reading is the world’s largest site for readers and book recommendations. Our mission is to help people find and
          share books they love. Worth-reading launched in May 2022.
        </PageDescription>
        <StyledContactContainer>
          <StyledContactHeader>KONTAKT:</StyledContactHeader>
          <StyledAddressContainer>
            Worth-reading.com <br />
            ul. lorem ipsum <br />
            Lorem ipusm <br />
            NIP 123-45-67
            <br />
            <br />
            tel: 123 456 789 <br />
            email: admin@warthreading.com
          </StyledAddressContainer>
        </StyledContactContainer>
      </StyledContainer>
    </>
  );
}

export default aboutUs;
