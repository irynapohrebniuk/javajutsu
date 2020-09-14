import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  display: block;
  background: green;
  cursor: pointer;
`

const NavItem = styled.li`
  display: block;
  color: gray
`

function App() {
  return (
    <NavList>
      <NavItem>My Projects</NavItem>
    </NavList>
  );
}

export default App;
