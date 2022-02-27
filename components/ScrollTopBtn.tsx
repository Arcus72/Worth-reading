import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollTopIcon from '@assets/svg/ScrollTopIcon';

interface WrapperProps {
  isBtnVisible: boolean;
}

const StyledWrapper = styled.div<WrapperProps>`
  cursor: pointer;
  position: fixed;
  bottom: -5px;
  right: 5px;
  width: 60px;
  height: 80px;
  display: ${(props) => (props.isBtnVisible ? 'block' : 'none')};

  svg {
    width: 60px;
    height: 80px;
  }
`;

function ScrollTopBtn() {
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setIsBtnVisible(true);
      } else {
        setIsBtnVisible(false);
      }
    });
  }, []);

  const scrollTop = () => document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <StyledWrapper onClick={() => scrollTop()} isBtnVisible={isBtnVisible}>
      <ScrollTopIcon />
    </StyledWrapper>
  );
}

export default ScrollTopBtn;
