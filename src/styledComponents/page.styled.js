import styled from 'styled-components'

const StyledPage = styled.section`
    padding: 1rem 2rem 6rem 2rem;
    z-index: -1;
    padding-left: ${({ open }) => open ? '20rem;' : '7rem;'};
`
export default StyledPage