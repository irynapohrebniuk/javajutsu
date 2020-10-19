import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../hooks'

const StyledButton = styled.button`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
`

const LanguageMenu = () => {
    const {language, setLanguage} = useContext(LanguageContext)
    return (
        <>
        {/* <form>
            <StyledSelect>
                <option value="pl" onSelect={() => setLanguage('pl')}>Polski</option>
                <option value="en" onSelect={() => setLanguage('en')}>English</option>
                <option value="ru" onSelect={() => setLanguage('ru')}>Русский</option>
            </StyledSelect>
        </form> */}
        <StyledButton onClick={() => (language === 'pl')? setLanguage('en') : setLanguage('pl')}>click</StyledButton>
        Language: {language}
        </>
        
    )
}

export default LanguageMenu