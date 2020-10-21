import styled from 'styled-components'

const StyledResponsiveImg = styled.img`
  width: ${(props) => (props.width)? props.width : '100%'};
  height: auto;
  margin: 2rem;
`

export default StyledResponsiveImg