import React from 'react'
import styled from 'styled-components'
import StyledSection from '../styledComponents/section.styled';

const StyledTextarea = styled.textarea`
	height: 8rem;
	padding: 5px;
  width: 60%;
	background-color: ${({ theme }) => theme.primaryLight};
	background-position: bottom right;
  border: 1px solid gainsboro;
  box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
  :focus {
    box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
  }
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryDark};
  width: auto;
  border: none;
  color: ${({ theme }) => theme.primaryLight};;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2rem;
  width: 60%;
`

const Label = styled.div`
  margin-right: 1rem;
  flex-basis: auto;
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0;
`

function Contact({ open }) {
  return (
    <>
      <StyledSection open={open} direction='column' alignItems='center'>
        <Label>Leave a message:</Label>
        <StyledTextarea rows="4" cols="50" />
        <Button>Send</Button>
      </StyledSection>
      
    </>
  )
}

export default Contact