import styled from 'styled-components'

const StyledPage = styled.section`
    padding: 1rem 2rem 6rem 2rem;
    z-index: -1;
    padding-left: ${({ open }) => open ? '20rem;' : '7rem;'};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 100%;
        padding: 2rem;
    }
    @media (max-width: 700px) and (orientation: landscape) {
        flex-basis: 100%;
        padding-left: 2rem;
    }
`
export default StyledPage