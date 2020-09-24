import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 100%;
    background-color: red;
    bottom: 0;
`

const Footer = () => {
    return (
        <StyledFooter>
            Icons made by 
            <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                Pixel perfect
            </a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </StyledFooter>
    )
}

export default Footer
