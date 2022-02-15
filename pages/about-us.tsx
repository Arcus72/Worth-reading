import React from 'react';
import CustomHead from '@comp/CustomPageTitle';
import PageHeader from '@comp/PageHeader';
import styled from 'styled-components';
import { ArticleHeaderTextSize, NormalTextSize } from '@style/fontType';

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias totam unde quaerat minus. Repellendus voluptatibus
          quisquam voluptas magnam? Assumenda cum, harum commodi quas repellendus consequatur aspernatur veniam deserunt
          accusantium exercitationem molestiae consectetur, saepe odit. Temporibus, suscipit praesentium rerum blanditiis ea sunt
          dolor quas, fugiat ad aliquam natus incidunt! Sunt repudiandae consequuntur, consequatur pariatur quidem eum cumque
          ipsam nisi iste assumenda hic vero fugit modi, nihil libero voluptatibus quas! Quibusdam quam dolorem
          <br /> <br />
          nemo repellendus explicabo rerum nesciunt fugit possimus laborum impedit. Maxime voluptates nihil recusandae dolor
          incidunt voluptatem error expedita quisquam beatae? Ipsa iusto est error. Esse voluptas rem alias corrupti deleniti
          <br /> <br />
          pariatur impedit distinctio aut, quia et rerum, hic fugiat magnam doloremque reprehenderit.
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
