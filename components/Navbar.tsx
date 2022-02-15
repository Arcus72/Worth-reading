import React, { useState } from 'react';
import MainSearchInput from './MainSearchInput';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  StyledButton,
  StyledWrapper,
  StyledHeader,
  StyledText,
  StyledNav,
  StyledListItem,
  StyledList,
  StyledPageBanner,
} from './Navbar-style';
//TODO: popsute phone
function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();
  return (
    <>
      <StyledWrapper>
        <StyledHeader>
          <Link href='/' passHref>
            <StyledPageBanner>
              <StyledText>W</StyledText>orth-reading
            </StyledPageBanner>
          </Link>
        </StyledHeader>
        <StyledButton onClick={() => setIsMenuActive(!isMenuActive)} className={isMenuActive ? 'active' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </StyledButton>
        <MainSearchInput />
      </StyledWrapper>

      <StyledNav className={isMenuActive ? 'active' : ''}>
        <StyledList>
          <StyledListItem className={router.pathname == '/' ? ' active' : ''} onClick={() => setIsMenuActive(false)}>
            <Link href='/'>Books</Link>
          </StyledListItem>
          <StyledListItem className={router.pathname == '/addBook' ? ' active' : ''} onClick={() => setIsMenuActive(false)}>
            <Link href='/addBook'>Add book</Link>
          </StyledListItem>
          <StyledListItem className={router.pathname == '/categories' ? ' active' : ''} onClick={() => setIsMenuActive(false)}>
            <Link href='/categories'>Categories</Link>
          </StyledListItem>
          <StyledListItem className={router.pathname == '/authors' ? ' active' : ''} onClick={() => setIsMenuActive(false)}>
            <Link href='/authors'>Authors</Link>
          </StyledListItem>
          <StyledListItem className={router.pathname == '/about-us' ? ' active' : ''} onClick={() => setIsMenuActive(false)}>
            <Link href='/about-us'>About us</Link>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </>
  );
}

export default Navbar;
