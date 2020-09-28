import styled from 'styled-components'

const StyledPage = styled.section`
    padding: 1rem 2rem 6rem 2rem;
    z-index: -1;
    padding-left: ${({ open }) => open ? '26rem;' : '10rem;'};
    flex-wrap: wrap;
    transition: transform 0.5s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 90%;
        padding: 2rem;
    }
    @media (max-width: 700px) and (orientation: landscape) {
        flex-basis: 90%;
        padding-left: 2rem;
    }
`
export default StyledPage