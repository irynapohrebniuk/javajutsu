import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  display: block;
  margin-top: 5rem;
  list-style-type: none;
  flex-basis: 90%;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  z-index: 3;
  padding: 1rem;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.19);
`
const StyledListItem = styled.li`
    :hover {
        cursor: pointer;
    }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block; 
  padding-bottom: 2px;
  color: black;
  border-bottom: 2px solid transparent;

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