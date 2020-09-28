import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: flex-start;
  background: ${({ theme }) => theme.primaryDark};
  align-content: stretch;
  height: 30rem;
  width: 24rem;
  text-align: center;
  padding: 2rem;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
`
export const StyledTriangle = styled.div`
      position: absolute;
      top: 29rem;
      left: 10rem;
      width: 0;
      height: 0;
      border-left: 2rem solid transparent;
      border-right: 2rem solid transparent;
      border-bottom: 2rem solid ${({ theme }) => theme.primaryLight};
      transition: transform 0.2s ease-in-out;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
      z-index: 11;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3rem;
  list-style: none;
  text-transform: none;
  font-weight: 300;
  line-height: 60px;
`
export const NavItem = styled.li`
  display: block;
`

export const StyledLink = styled(Link)`
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
`;

const navItemsNames = ['Projects', 'About', 'Contact']

const NavItems = (props) => {
  const items = props.items.map((item) => <NavItem key={'navItem_' + item}><StyledLink to={'/' + item}>{item}</StyledLink></NavItem>)
  return items
}

const Menu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <NavList>
          <NavItems items={navItemsNames}></NavItems>
        </NavList>
      </StyledMenu>
      <StyledTriangle open={open} />
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu


