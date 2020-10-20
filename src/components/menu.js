import React, {useContext} from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'
import SocialMenu from './socialmenu'
import { LanguageContext } from '../hooks'
import { menuItems } from '../db'

export const StyledMenu = styled.nav`
  flex-basis: ${({ open }) => (open)? '30%' : '0'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme, open }) => (open)? theme.primaryDark : theme.primaryLight};
  transition: background-color 0.5s ease-in-out;
  z-index: 3;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-basis: 100%;
    flex-direction: column;
    min-height: ${({ open }) => (open)? '100vh' : '0'};
  }
`
export const StyledTriangle = styled.div`
  position: fixed;
  display:  ${({ open }) => open ? 'block' : 'none'};
  bottom: 0;
  width: 0;
  height: 0;
  left: 13%;
  border-left: 2rem solid transparent;
  border-right: 2rem solid transparent;
  border-bottom: 2rem solid ${({ theme }) => theme.primaryLight};
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 4;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 43%;
  }
`

export const NavList = styled.ul`
  display: ${({ open }) => open ? 'block' : 'none'}; 
  list-style: none;
  width: ${({ open }) => (open)? '100%' : '0'};
  text-align: center;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ open }) => (open)? '100%' : '0'};
  }
`

export const NavItem = styled.li`
  font-weight: 300;
  line-height: 4rem;
`

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  transition: color 0.3s linear;
    
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const NavItems = (props) => {
  const items = props.items.map((item, index) => 
    <NavItem key={'navItem_' + item}>
      <StyledLink to={'/' + props.slugs[index]} > {item} </StyledLink>
    </NavItem>)
  return items
}

const Menu = ({ open, setVisible }) => {
  const { language, } = useContext(LanguageContext)
  const navItemsNames = menuItems[language]
  return (
    <>
      <StyledMenu open={open}>
        <NavList open={open}>
          <NavItems open={open} items={navItemsNames} slugs={menuItems['en']} 
            onClick={(e)=> ((e.target.innerText === 'Projects') || (e.target.innerText === 'Projekty') || (e.target.innerText === 'Проекты'))? setVisible(true): setVisible(false)}></NavItems>
        </NavList>
        <SocialMenu open={open} />
        <StyledTriangle open={open} />
      </StyledMenu>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu


