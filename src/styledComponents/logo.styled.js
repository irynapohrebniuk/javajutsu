import styled from 'styled-components'
import logoLight from '../img/logoLight_48.png'
import logoDark from '../img/logoDark_48.png'

export const StyledLogo = styled.div`
  position: absolute;
  background-image: url(${({open}) => open ? logoDark : logoLight});
  top: 3%;
  left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  border: none;
  padding: 0;
  z-index: 100;
  transition: background-image 0.5s;
`