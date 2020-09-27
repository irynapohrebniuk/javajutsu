import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  align-content: center;
  height: 3rem;
  flex-grow: 1;
  align-items: center;
  padding-left: ${({ open }) => open ? '20rem;' : '7rem;'};
`
const StyledListItem = styled.li`
    padding: 0 2rem;
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
`

const SubMenu = ({open}) => {
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