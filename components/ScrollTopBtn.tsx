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
`;

const scrollTop = () => {
  let i = 0;
  for (let j = window.scrollY; j > 0; j -= 20) {
    i++;
    setTimeout(() => {
      window.scrollTo(0, j);
    }, 2 * i);
  }
};

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

  return (
    <StyledWrapper onClick={scrollTop} isBtnVisible={isBtnVisible}>
      <ScrollTopIcon width='60' height='80' />
    </StyledWrapper>
  );
}

export default ScrollTopBtn;
