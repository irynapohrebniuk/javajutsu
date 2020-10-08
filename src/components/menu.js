import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'
import SocialMenu from './socialmenu'

export const StyledMenu = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  align-content: stretch;
  height: 100vh;
  width: 24rem;
  text-align: center;
  padding: 2rem;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 3;
`
export const StyledTriangle = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  left: 10rem;
  border-left: 2rem solid transparent;
  border-right: 2rem solid transparent;
  border-bottom: 2rem solid ${({ theme }) => theme.primaryLight};
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 2;
`

export const NavList = styled.ul`
  display: block; 
  list-style: none;
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
      <StyledLink to={'/' + item}> {item} </StyledLink>
    </NavItem>)
  return items
}

const Menu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <NavList>
          <NavItems items={navItemsNames}></NavItems>
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


