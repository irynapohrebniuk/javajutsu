import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  color: ${({ theme }) => theme.primaryDark};
  justify-content: ${(props) => (props)? props.justifyContent : 'flex-start'}
`

export default StyledContainer