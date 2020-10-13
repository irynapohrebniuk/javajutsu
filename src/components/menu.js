import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'
import SocialMenu from './socialmenu'

export const StyledMenu = styled.nav`
  flex-basis: ${({ open }) => (open)? '30rem' : '0rem'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  text-align: center;
  padding: 1rem;
  background: ${({ theme, open }) => (open)? theme.primaryDark : theme.primaryLight};
  transition: background-color 0.5s ease-in-out;
  z-index: 3;
`
export const StyledTriangle = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  left: 13rem;
  border-left: 2rem solid transparent;
  border-right: 2rem solid transparent;
  border-bottom: 2rem solid ${({ theme }) => theme.primaryLight};
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 4;
`

export const NavList = styled.ul` 
  list-style: none;
  display: ${({ open }) => (open)? 'block' : 'none'};
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`

export const NavItem = styled.li`
  display: block;
  font-weight: 300;
  line-height: 60px;
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

const navItemsNames = ['Projects', 'About', 'Contact']

const NavItems = (props) => {
  const items = props.items.map((item) => 
    <NavItem key={'navItem_' + item}>
      <StyledLink to={'/' + item} > {item} </StyledLink>
    </NavItem>)
  return items
}

const Menu = ({ open, setVisible }) => {
  
  return (
    <>
      <StyledMenu open={open}>
        <NavList open={open}>
          <NavItems items={navItemsNames} onClick={(e)=> (e.target.innerText === 'Projects')? setVisible(true): setVisible(false)}></NavItems>
        </NavList>
        <SocialMenu />
        <StyledTriangle open={open} />
      </StyledMenu>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu


