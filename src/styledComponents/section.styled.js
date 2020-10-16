import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 2rem;
    display: flex;
    direction: ${(props) => (props.direction)? props.direction : "row"};
    justify-content: ${(props) => (props.justifyContent)? props.justifyContent : "flex-start"};
    margin-top: ${({open}) => (open)? "2rem" : "4rem"};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-basis: 100%;
      flex-direction: column;
      margin-top: 0;
      padding: 0 1.5rem;
  }
`
export default StyledSection