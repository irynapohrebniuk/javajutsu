import React from 'react'
import styled from 'styled-components'

const StyledSettings = styled.div`
    flex-basis: 50%; 
    flex-grow: 1;
    text-align: right;
    background-color: green;
    height: 64px;
    z-index: 0;
`

const Settings = () => {
    return (
        <StyledSettings>
            Settings
        </StyledSettings>
    )
}

export default Settings