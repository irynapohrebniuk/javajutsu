import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  align-content: center;
  flex-grow: 1;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`
const StyledListItem = styled.li`
    :hover {
        cursor: pointer;
    }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;
  color: black;
  :hover {
    border-bottom: 2px solid black;
  }
  ::after {
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid ${({ theme }) => theme.primaryLight};
    transition: transform 0.2s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

const SubMenu = ({ open }) => {
    const filterItems = ['All', 'React', 'Angular', 'Vanilla JS']
    return (
        <StyledList open={open}>
            {
                filterItems.map((item, index) =>
                    <StyledListItem key={index}>
                        <StyledNavLink to={'/projects/' + item}>
                            {item}
                        </StyledNavLink>
                    </StyledListItem>)
            }
        </StyledList>
    )
}

export default SubMenu