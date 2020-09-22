import React from 'react'
import styled from 'styled-components'
import logoLight from '../img/logoLight_48.png'

const StyledLogo = styled.div`
  flex-basis: 64px;
  min-height: 64px;
  flex-grow: 0;
  background-color: yellow;
`

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logoLight} alt='logo' />
        </StyledLogo>
    )
}

export default Logo