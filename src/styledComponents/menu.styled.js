import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
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
  margin: 0;
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
`
