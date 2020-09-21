import styled from 'styled-components'

const StyledContainer = styled.div`
  position: ${(props) => props.position};
  display: flex;
  flex-direction: ${(props) => props.direction};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: column;
  }
  justify-content: center;
  top: 2rem;
  left: 7rem;
  width: 90%;
  z-index: -1;
  padding: 2%;
  color: ${({ theme }) => theme.primaryLight};
`

export default StyledContainer