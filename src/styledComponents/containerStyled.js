import styled from 'styled-components'

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  width: 100%;
  top: 12%;
  z-index: -1;
  padding: 5%;
  color: ${({ theme }) => theme.primaryLight};
`

export default StyledContainer