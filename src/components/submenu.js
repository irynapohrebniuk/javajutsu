import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  height: 3rem;
`
const StyledListItem = styled.li`
    padding: 1rem;
    :hover {
        cursor: pointer;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding-bottom: 5px;
    :hover {
        border-bottom: 2px solid green;
    }
`



const FilterMenu = () => {
    const filterItems = ['All', 'React', 'Angular', 'Vanilla JS']
    return (
        <StyledList>
            {
                filterItems.map((item, index) => <StyledListItem key={index}><StyledNavLink to={'/' + item}>{item}</StyledNavLink></StyledListItem>)
            }
        </StyledList>
    )
}

export default FilterMenu