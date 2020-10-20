import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: ${(props) => (props.direction) ? props.direction : 'row'};
  color: ${({ theme }) => theme.primaryDark};
  justify-content: ${(props) => (props.justifyContent) ? props.justifyContent : 'flex-start'};
  align-content: ${(props) => (props.alignContent) ? props.alignContent : 'flex-start'};
  align-items: ${(props) => (props.alignItems) ? props.alignItems : 'space-evenly'};
  margin-top: ${(props) => (props.top) ? 'props.top' : '0'};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 100%;
    flex-direction: column;
  }
`

export default StyledContainer