import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: ${(props) => props.direction};
  color: ${({ theme }) => theme.primaryDark};
  justify-content: ${(props) => (props.justifyContent)? props.justifyContent : 'flex-start'};
  margin-top: ${(props) => (props.top)? 'props.top' : '0'};
`

export default StyledContainer