import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { NormalTextSize } from '@style/zmienneCss';

const StyledWrapper = styled.div`
  margin-top: 0.5rem;
  ${NormalTextSize()}

  a {
    color: ${(props) => props.theme.colors.main};
    text-decoration: none;
  }
`;

const createPathFromArr = (arr: string[], index: number): string => {
  const arrCopy = [...arr];
  const arrPart = arrCopy.slice(0, index + 1);
  return arrPart.join('/').replaceAll('home', '/').replaceAll('//', '/');
};

function DisplayPath() {
  const router = useRouter();

  const path = router.asPath.replaceAll(/(#|\?).*/g, '');
  let pathParts = [];

  if (path == '/') {
    pathParts = ['home'];
  } else {
    pathParts = path.split('/');
    pathParts[0] = 'home';
  }

  const urlLinks = pathParts.map((path, index, arr) => createPathFromArr(arr, index));

  return (
    <StyledWrapper>
      {pathParts.map((name, index) => (
        <span key={index}>
          <Link href={urlLinks[index]}>{name.replaceAll('_', '.').replaceAll('-', ' ')}</Link>
          &nbsp;&#187;&nbsp;
        </span>
      ))}
    </StyledWrapper>
  );
}

export default DisplayPath;
