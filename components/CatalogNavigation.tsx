import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #597194;
  margin-bottom: 2rem;
`;

const StyledPageNumber = styled.span<PropsStyledPageNumber>`
  padding: 0.5rem 1.5rem;
  font-size: 2.6rem;
  color: ${(props) => (props.isCurrentPage ? props.theme.colors.main : '   #597194;')};
  cursor: pointer;
`;

const LeftArrow = styled.i<PropsRightArrow>`
  border: solid ${(props) => (props.isDisabled ? '#34495e' : '#ecf0f1')};
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  cursor: pointer;
`;

const RightArrow = styled.i<PropsRightArrow>`
  border: solid ${(props) => (props.isDisabled ? '#34495e' : '#ecf0f1')};
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  cursor: pointer;
`;

interface PropsRightArrow {
  isDisabled: boolean;
}

interface Props {
  currentPage: number;
  amountOfPages: number;
  changePage: (arg1: number) => void;
}

interface PropsStyledPageNumber {
  isCurrentPage: boolean;
}

const NumbersOfPages = (amountOfPages: number, currentPage: number): (number | string)[] => {
  let result: (number | string)[] = [];

  if (currentPage != 1) {
    result.push(1);
  }

  let numberNearCurrentPage: (number | string)[] = [currentPage];

  for (let i = 1; numberNearCurrentPage.length < 7; i++) {
    let isNearlyOverloaded = [false, false];
    if (currentPage + i < amountOfPages) {
      numberNearCurrentPage.push(currentPage + i);
    } else isNearlyOverloaded[0] = true;
    if (1 < currentPage - i) {
      numberNearCurrentPage.unshift(currentPage - i);
    } else isNearlyOverloaded[1] = true;

    if (isNearlyOverloaded[0] == true && isNearlyOverloaded[1] == true) {
      break;
    }
  }

  if (numberNearCurrentPage[0] > 2) {
    numberNearCurrentPage.unshift('...');
  }

  if (numberNearCurrentPage[numberNearCurrentPage.length - 1] < amountOfPages - 1) {
    numberNearCurrentPage.push('...');
  }

  result.push(...numberNearCurrentPage);

  if (currentPage != amountOfPages) {
    result.push(amountOfPages);
  }

  return result;
};

function CatalogNavigation({ amountOfPages, currentPage, changePage }: Props) {
  const pageNumbers = NumbersOfPages(amountOfPages, currentPage);

  return (
    <StyledWrapper>
      <span>
        <RightArrow onClick={() => 1 != currentPage && changePage(+currentPage - 1)} isDisabled={1 != currentPage}></RightArrow>
      </span>
      {pageNumbers.map((number, index) =>
        number != '...' ? (
          <StyledPageNumber
            onClick={() => currentPage != number && changePage(+number)}
            key={index}
            isCurrentPage={number == currentPage}
          >
            {number}
          </StyledPageNumber>
        ) : (
          <StyledPageNumber key={index} isCurrentPage={false}>
            ...
          </StyledPageNumber>
        ),
      )}
      <span>
        <LeftArrow
          onClick={() => amountOfPages != currentPage && changePage(+currentPage + 1)}
          isDisabled={amountOfPages != currentPage}
        ></LeftArrow>
      </span>
    </StyledWrapper>
  );
}

export default CatalogNavigation;
