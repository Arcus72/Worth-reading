/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';
import CustomHead from '@comp/CustomPageTitle';
import PageHeader from '@comp/PageHeader';
import { useFormik as UseFormik } from 'formik';

import Link from 'next/link';
import { NormalTextSize, ArticleHeaderTextSize } from '@style/fontType';
import styled from 'styled-components';
import * as Yup from 'yup';
const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const StyledPageDescription = styled.p`
  ${NormalTextSize()}

  margin: 2rem 0;
`;

const StyledFrom = styled.form`
  width: 100%;
`;

const StyledFormHeader = styled.h2`
  ${ArticleHeaderTextSize()}
  margin-bottom: 4rem;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: none;
  border-bottom: 2px solid black;
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  padding: 0.1rem;
  order: 2;

  &:placeholder-shown ~ label {
    transform: translateY(20%);
  }

  &:not(:placeholder-shown) ~ label {
    ${NormalTextSize(1.2)}
  }

  &:focus ~ label {
    transform: translateY(0%) !important;
    ${NormalTextSize(1.2)}
  }

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
  }
`;

const StyledInputField = styled.div`
  position: relative;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  &:first-child {
    margin-top: 2rem;
  }
`;

const StyledLabel = styled.label`
  color: gray;
  order: 0;
  position: absolute;
  top: -70%;
  left: 0;
  ${NormalTextSize()};
  transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
`;

const StyledTextAreaField = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;

const StyledTextArea = styled.textarea`
  border: none;
  border-radius: none;
  border-bottom: 2px solid black;
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  padding: 0.1rem;
  order: 2;
  resize: none;
  height: 7rem;

  &:placeholder-shown ~ label {
    transform: translateY(20%);
  }

  &:not(:placeholder-shown) ~ label {
    ${NormalTextSize(1.2)}
  }

  &:focus ~ label {
    transform: translateY(0%) !important;
    ${NormalTextSize(1.2)}
  }

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
  }
`;

const StyledTextAreaLabel = styled.label`
  color: gray;
  order: 0;
  position: absolute;
  top: -20%;
  left: 0;
  ${NormalTextSize()};
  transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
`;

const StyledSendBtn = styled.button`
  display: block;
  background: none;
  padding: 0.7rem;
  margin: 2rem auto;
  border: 2px solid ${(props) => props.theme.colors.main};
  text-align: center;
  width: 40%;
  margin-bottom: 2rem;
  cursor: pointer;
  ${NormalTextSize(2)}
  transition: letter-spacing 0.5s;
  &:hover {
    letter-spacing: 5px;
  }
`;

const StyledInvalidError = styled.div`
  color: red;
  font-size: 1.6rem;
`;

const StyledThankYou = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 50%, 0.92);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMessage = styled.div`
  background-color: white;
  width: 80%;
  text-align: center;
  padding: 1rem 1rem;
`;

const StyledBtn = styled.button`
  border: none;
  background: none;
  margin: 0.5rem 1rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border: 1.5px solid ${(props) => props.theme.colors.main};
  ${NormalTextSize()}
`;

const StyledMessageHeader = styled.h1`
  ${ArticleHeaderTextSize()}
`;

const StyledMessageText = styled.p`
  ${NormalTextSize()}
  padding: 1rem 0;
`;

function addBook() {
  const [isMessageShow, setIsMessageShow] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formik = UseFormik({
    initialValues: {
      name: '',
      email: '',
      title: '',
      description: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().max(40, 'Must be 40 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      title: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      description: Yup.string()
        .min(15, 'Must be 15 characters or more')
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
    }),

    onSubmit: (values) => {
      alert(`
      name: ${values.name};
      email: ${values.email};
      title: ${values.title};
      description: ${values.description};
      `);
      setIsMessageShow(true);
    },
  });

  return (
    <>
      {isMessageShow && (
        <StyledThankYou>
          <StyledMessage>
            <StyledMessageHeader>Lorem ipsum</StyledMessageHeader>
            <StyledMessageText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis placerat dolor, in semper lectus.
            </StyledMessageText>
            <Link href='/'>
              <a>
                <StyledBtn>Home</StyledBtn>
              </a>
            </Link>

            <StyledBtn onClick={() => setIsMessageShow(false)}>Back</StyledBtn>
          </StyledMessage>
        </StyledThankYou>
      )}
      <CustomHead title='Add book' />
      <PageHeader title='Add book' />
      <StyledContainer>
        <StyledPageDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis placerat dolor, in semper lectus. Maecenas eu
          lectus quis augue placerat volutpat quis vitae arcu. Sed in feugiat nunc, a commodo urna. In viverra dignissim interdum.
          Nam ullamcorper erat vel quam elementum, ut imperdiet ex cursus. Curabitur venenatis sapien ex, eleifend pellentesque
          lorem interdum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum et
          rhoncus dolor. Cras nec lorem sit amet lorem commodo pretium. Sed pulvinar fermentum vulputate. Nullam ultrices metus
          eget leo dapibus, at imperdiet libero laoreet.
        </StyledPageDescription>
        <StyledFormHeader>Complete form:</StyledFormHeader>
        <StyledFrom ref={formRef} onSubmit={formik.handleSubmit}>
          <StyledInputField>
            <StyledInput
              type='text'
              id='name'
              name='name'
              placeholder=' '
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <StyledLabel htmlFor='name'>Your name</StyledLabel>
          </StyledInputField>
          {formik.touched.name && formik.errors.name ? <StyledInvalidError>{formik.errors.name}</StyledInvalidError> : null}
          <StyledInputField>
            <StyledInput
              type='text'
              id='email'
              name='email'
              placeholder=' '
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <StyledLabel htmlFor='email'>E-mail</StyledLabel>
          </StyledInputField>
          {formik.touched.email && formik.errors.email ? <StyledInvalidError>{formik.errors.email}</StyledInvalidError> : null}
          <StyledInputField>
            <StyledInput
              type='text'
              id='title'
              name='title'
              placeholder=' '
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            <StyledLabel htmlFor='title'>Title</StyledLabel>
          </StyledInputField>
          {formik.touched.title && formik.errors.title ? <StyledInvalidError>{formik.errors.title}</StyledInvalidError> : null}
          <StyledTextAreaField>
            <StyledTextArea
              id='description'
              name='description'
              placeholder=' '
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            <StyledTextAreaLabel htmlFor='description'>Description</StyledTextAreaLabel>
          </StyledTextAreaField>
          {formik.touched.description && formik.errors.description ? (
            <StyledInvalidError>{formik.errors.description}</StyledInvalidError>
          ) : null}
          <StyledSendBtn type='submit'>Send</StyledSendBtn>
        </StyledFrom>
      </StyledContainer>
    </>
  );
}

export default addBook;
