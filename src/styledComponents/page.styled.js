import styled from 'styled-components'

const StyledPage = styled.section`
    margin-top: 2rem;
    flex-basis: 100%;
    padding: 4rem 4rem 6rem 2rem;
    z-index: -1;
    padding-left: ${({ open }) => open ? '26rem;' : '10rem;'};
    flex-wrap: wrap;
    
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