import styled from 'styled-components'

const StyledContainer = styled.div`
  
  display: flex; 
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.direction};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: column;
  }

  color: ${({ theme }) => theme.primaryLight};
`

export default StyledContainer