import styled from 'styled-components'

const StyledProjectBlock = styled.div`
  flex-direction: row;
`;

const StyledProjectImage = styled.img`
  width: auto;
`;

const StyledProjectList = styled.ul`
  list-style-type: square;
`

const StyledProjectListItem = styled.li`
  display: block;
  &::before {
  content: "\2022";
  color: ${({ theme }) => theme.primaryLight};
  }
`

export { StyledProjectBlock, StyledProjectImage, StyledProjectList, StyledProjectListItem }