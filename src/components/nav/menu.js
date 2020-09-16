import React from 'react'
import { StyledMenu, NavItem, NavList, StyledLink } from '../../styledComponents/menu.styled'
import { bool } from 'prop-types'

const navItemsNames = ['Projects', 'About', 'Contact']

const NavItems = (props) => {
  const items = props.items.map((item) => <NavItem><StyledLink to={'/'+ item}>{item}</StyledLink></NavItem>)
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


