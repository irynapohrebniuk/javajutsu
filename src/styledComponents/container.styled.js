import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: column;
  }

  color: ${({ theme }) => theme.primaryDark};
`

export default StyledContainer