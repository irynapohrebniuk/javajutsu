import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    position: absolute;
    bottom: -32px;
    height: 2rem;
    background-color: grey;
    width: 100%;
    z-index: 200;
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
