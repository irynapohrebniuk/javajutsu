import React from 'react'
import SocialMenu from '../components/socialmenu';
import StyledSection from '../styledComponents/section.styled';

// const StyledTextarea = styled.textarea`
// 	height: 8rem;
// 	padding: 5px;
//   width: 60%;
// 	background-color: ${({ theme }) => theme.primaryLight};
// 	background-position: bottom right;
//   border: 1px solid gainsboro;
//   box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
//   :focus {
//     box-shadow: 6px 8px 6px -6px rgba(0, 0, 0, 0.19);
//   }
// `

// const Button = styled.button`
//   background-color: ${({ theme }) => theme.primaryDark};
//   width: auto;
//   border: none;
//   color: ${({ theme }) => theme.primaryLight};;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 2rem;
//   width: 60%;
// `

// const Label = styled.div`
//   margin-right: 1rem;
//   flex-basis: auto;
//   font-size: 1rem;
//   font-weight: 500;
//   margin: 1rem 0;
// `


function Contact({ open }) {
  return (
    <StyledSection open={open} direction="column" top="5rem">
      <SocialMenu open color />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1253.4321265544975!2d16.988696108256637!3d51.074055880165496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3cd3b5d6c17%3A0x63d4d254df680995!2sKrzyki%2C%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1603352162214!5m2!1spl!2spl" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>

      {/* <StyledSection open={open} direction='column' alignItems='center'>
        <Label>Leave a message:</Label>
        <StyledTextarea rows="4" cols="50" />
        <Button>Send</Button>
      </StyledSection> */}
      
    </StyledSection>
  )
}

export default Contact