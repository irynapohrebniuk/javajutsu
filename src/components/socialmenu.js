import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '../img/svg/instagramIcon'
import FacebookIcon from '../img/svg/facebookIcon'
import LinkedinIcon from '../img/svg/linkedinIcon'
import { theme } from '../styledComponents/theme'
import GithubIcon from './githubIcon'



const SocialIconContainer = styled.div`
  display: ${({ open }) => (open)? 'flex' : 'none'};
  z-index: 3;
  justify-content: center;
  margin-top: 3rem;
  padding: 0;
`

const SocialIcon = styled.div`
  width: 3rem;
  height: 3rem;
  flex-basis: 3rem;
  align-content: center;
  justify-content: center;
  margin: 1rem;
`

const SocialMenu = (props) => {
  const colorIcon = (props.color)? theme.primaryDark : theme.primaryLight;
  return (
    <div>
      <SocialIconContainer open={props.open}>
        <SocialIcon>
        <a href='https://www.instagram.com/iryna.pohrebniuk/'><InstagramIcon color={colorIcon} /></a>
        </SocialIcon>
        <SocialIcon>
        <a href='https://www.facebook.com/IrynaPohrebniuk'><FacebookIcon color={colorIcon} /></a>
        </SocialIcon>
        <SocialIcon>
          <a href='https://www.linkedin.com/in/iryna-pohrebniuk/'><LinkedinIcon color={colorIcon} /></a>
        </SocialIcon>
        <SocialIcon>
          <a href='https://www.linkedin.com/in/iryna-pohrebniuk/'><GithubIcon height='48' width='48' color={colorIcon}/></a>
        </SocialIcon>
        
      </SocialIconContainer>
    </div>
  )
}

export default SocialMenu