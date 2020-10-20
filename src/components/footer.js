import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  position: relative;
  flex-basis: 100%;
  background-color: ${({theme}) => theme.primaryDark};
  width: 100%;
  z-index: 1;
  margin: 0;
  padding: 1rem;
  text-align: right;
  color: ${({theme}) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ open }) => (open)? 'none' : 'block'};
  }
`
const Footer = ({open}) => {
    return (
        <StyledFooter open={open}>
            Icons made by &nbsp;  
            <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
            Pixel perfect 
            </a> &nbsp; from&nbsp; 
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            <br />Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> 
            &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </StyledFooter>
    )
}

export default Footer
