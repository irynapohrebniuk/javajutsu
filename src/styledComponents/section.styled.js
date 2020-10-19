import styled from 'styled-components'

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.justifyContent)? props.justifyContent : "flex-start"};
    margin-top: ${({open}) => (open)? "2rem" : "4rem"};
    padding: 2rem;
    min-height: 90vh;
    align-items: ${(props) => (props.alignItems)? props.alignItems : "flex-start"};;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-basis: 100%;
      flex-direction: column;
      margin-top: 0;
      padding: 0 1.5rem;
  }
`
export default StyledSection