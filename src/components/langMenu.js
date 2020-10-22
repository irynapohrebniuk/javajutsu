import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../hooks'
import flag_en from '../img/svg/united-kingdom.svg'
import flag_pl from '../img/svg/poland.svg'
import flag_ru from '../img/svg/russia.svg'

const Main = styled.div`
  position: absolute;
  width: 5rem;
  right: 1rem;
  margin-right: 1rem;
  
  z-index: 300;
`;

const DropDownContainer = styled.div`
  margin: 0 auto;
`;

const DropDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.4em;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryDark};
  background: transparent;
  :hover {
    cursor: pointer;
  } 
`;

const DropDownListContainer = styled.div`
    padding: 0;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1rem;
  font-weight: 400;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-bottom: 0.5em;
  :hover {
    cursor: pointer;
  } 
`;

const ImgContainer = styled.div`
  width: 2rem;
  margin: 0.3rem;

`

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const toggling = () => setIsOpen(!isOpen);

  const languages = [{ lang: "en", icon: flag_en },
  { lang: "pl", icon: flag_pl },
  { lang: "ru", icon: flag_ru }
  ]

  const indexOfLang = languages.findIndex(item => item.lang === language)
  const activeIconLang = languages[indexOfLang].icon

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <ImgContainer>
            <img src={activeIconLang} alt={language} />
          </ImgContainer>
          <div>{language.toUpperCase()}</div>
        </DropDownHeader>
        {(isOpen) && (
          <DropDownListContainer>
            <DropDownList>
              {languages.map(item => (
                <ListItem
                  onClick={() => {
                    setLanguage(item.lang);
                    setIsOpen(!isOpen);
                  }
                  }
                  key={item.lang + Math.random()}>
                  <ImgContainer>
                    <img src={item.icon} alt={item} />
                  </ImgContainer>
                  {item.lang.toUpperCase()}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}

export default LanguageMenu