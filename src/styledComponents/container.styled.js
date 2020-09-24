import styled from 'styled-components'

const StyledContainer = styled.div`
  flex-direction: ${(props) => props.direction};
  display: flex; 
  position: ${(props) => props.position};
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: column;
  }

  color: ${({ theme }) => theme.primaryDark};
`

export default StyledContainer