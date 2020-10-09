import styled from 'styled-components'

const StyledPage = styled.section`
    margin-top: 2rem;
    padding: 4rem 4rem 6rem 2rem;
    z-index: -1;
    padding-left: ${({ open }) => open ? '22rem;' : '4rem;'};
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex: 100%;
        padding: 2rem;
    }
    @media (max-width: 700px) and (orientation: landscape) {
        flex: 100%;
        padding-left: 2rem;
    }
`
export default StyledPage