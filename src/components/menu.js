import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    z-index: -1;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

export const NavList = styled.ul`
  margin-top: 4rem;
  padding: 0;
  list-style: none;
  text-transform: none;
  font-weight: 300;
  line-height: 60px;
`
export const NavItem = styled.li`
  display: block;
  color: gray
`

export const StyledLink = styled(Link)`
    height: 100%;
    color: #5f6f81;
    text-decoration: none;
    cursor: pointer;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const navItemsNames = ['Projects', 'About', 'Contact']

const NavItems = (props) => {
  const items = props.items.map((item) => <NavItem key={'navItem_'+item}><StyledLink to={'/'+ item}>{item}</StyledLink></NavItem>)
  return items
}

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <NavList>
                <NavItems items={navItemsNames}></NavItems>
            </NavList>
        </StyledMenu>   
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu


