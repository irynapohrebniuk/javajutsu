import styled from 'styled-components'
import logoLight from '../img/logoLight_48.png'

export const StyledLogo = styled.div`
  background-image: url(${logoLight});
  position: absolute;
  left: 50%;
  margin-top: 2rem; 
  width: 64px;
  height: 64px;
  z-index: -1;
`