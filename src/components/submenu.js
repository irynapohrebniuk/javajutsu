import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  /* display: ${props => props.visible ? "none" : "none"};  */
  position: absolute;
  top: 2rem;
  left: 20rem;
  flex-basis: 30rem;
  width: 30rem;
  list-style-type: none;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  z-index: 3;
`
const StyledListItem = styled.li`
    :hover {
        cursor: pointer;
    }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  /* display: ${props => props.visible ? "inline-block": "none"} ; */
  padding-bottom: 2px;
  color: black;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid black;
  }
`

const SubMenu = (props) => {
    const filterItems = ['All', 'React', 'Angular', 'Vanilla JS']
    // console.log('open, visible: ', props.open, props.visible)
    return (
        <StyledList open={props.open} visible={props.visible}>
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