import React from 'react';
import {
  StyledBasicInformation,
  StyledBanner,
  StyledDescription,
  StyledImage,
  StyledImgField,
  StyledInformation,
  StyledWrapper,
} from './DetailsPage-style';
export interface DataForDetailsPage {
  title: string;
  image: string;
  info: (string | number)[][];
  description: {
    html: string;
  };
}

interface Props {
  data: DataForDetailsPage;
}

function DetailsPage({ data }: Props) {
  return (
    <StyledWrapper>
      <StyledBasicInformation>
        <StyledBanner>
          <h1>{data.title}</h1>
        </StyledBanner>
        <StyledImgField>
          <StyledImage src={data.image} alt='' />
        </StyledImgField>
        <StyledInformation>
          {data.info.map((description, index) => (
            <div key={index}>
              {description[0]}: {description[1]}
            </div>
          ))}
        </StyledInformation>
      </StyledBasicInformation>
      <StyledDescription dangerouslySetInnerHTML={{ __html: data.description.html }}></StyledDescription>
    </StyledWrapper>
  );
}

export default DetailsPage;
