import styled from 'styled-components'

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => (props.top) ? props.top : "0"};
    justify-content: ${(props) => (props.justifyContent) ? props.justifyContent : "flex-start"};
    padding: 1rem 2rem;
    min-height: 90vh;
    align-items: ${(props) => (props.alignItems) ? props.alignItems : "flex-start"};;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-basis: 100%;
      flex-direction: column;
      margin-top: 0;
      padding: 0 1.5rem;
  }
`
export default StyledSection