import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 2rem;
    display: flex;
    direction: ${(props) => (props.direction)? props.direction : 'row'};
    justify-content: ${(props) => (props.justifyContent)? props.justifyContent : 'flex-start'};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex: 100%;
      flex-direction: column;
  }
`
export default StyledSection