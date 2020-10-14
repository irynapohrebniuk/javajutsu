import React from 'react'
import styled from 'styled-components'
import StyledSection from '../styledComponents/section.styled';

const StyledTextarea = styled.textarea`
  flex-basis: 50%;
	min-height: 8rem;
	padding: 5px;
	font-family: Tahoma, sans-serif;
	background-color: ${({theme})=> theme.primaryLight };
	background-position: bottom right;
  border: 1px solid gainsboro;
  box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
  :focus {
    box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
  }
`

const Label = styled.div`
  margin-right: 1rem;
  flex-basis: auto;
  font-size: 1rem;
`

function Contact({ open }) {
  return (
    <StyledSection open={open} justifyContent='flex-start' direction='column'>
      <Label>Leave a message:</Label>
      <StyledTextarea id="w3review" name="w3review" rows="4" cols="50" />
    </StyledSection>
  )
}

export default Contact