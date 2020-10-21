import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
    text-align: center;
    background-color: ${({theme}) => theme.primaryButton};
    color: ${({theme}) => theme.primaryLight};
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: none;
    float: right;
    font-size: 1.5rem;
    font-weight: 400;
    :hover {
        cursor: pointer;
    }
`

const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}

export default Button