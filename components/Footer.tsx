import React from 'react';
import {
  StyledWrapper,
  StyledHeader,
  StyledSocialIcon,
  StyledNavigation,
  StyledIconList,
  StyledList,
  StyledListItem,
} from './Footer-style';
import TwitterIcon from '@assets/svg/TwitterIcon';
import FacebookIcon from '@assets/svg/FacebookIcon';
import YoutubeIcon from '@assets/svg/YoutubeIcon';
import Link from 'next/link';

function Footer() {
  return (
    <StyledWrapper>
      <StyledNavigation>
        <StyledList>
          <StyledListItem>
            <Link href='/'>Books</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/addBook'>Add Book</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/categories'>Categories</Link>
          </StyledListItem>
          <wbr />
          <StyledListItem>
            <Link href='/authors'>Authors</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href='/about-us'>About us</Link>
          </StyledListItem>
        </StyledList>
      </StyledNavigation>
      <StyledHeader>Follow us</StyledHeader>
      <StyledIconList>
        <StyledSocialIcon>
          <a href='https://www.facebook.com/'>
            <FacebookIcon />
          </a>
        </StyledSocialIcon>
        <StyledSocialIcon>
          <a href='https://www.youtube.com/'>
            <YoutubeIcon />
          </a>
        </StyledSocialIcon>
        <StyledSocialIcon>
          <a href='https://twitter.com'>
            <TwitterIcon />
          </a>
        </StyledSocialIcon>
      </StyledIconList>
    </StyledWrapper>
  );
}

export default Footer;
