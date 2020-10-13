import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '../img/svg-components/instagramIcon'
import FacebookIcon from '../img/svg-components/facebookIcon'
import LinkedinIcon from '../img/svg-components/linkedinIcon'
import { theme } from '../styledComponents/theme'

const colorIcon = theme.primaryLight;

const SocialIconContainer = styled.div`
  display: ${({ open }) => (open)? 'flex' : 'none'};
  z-index: 3;
  justify-content: center;
  margin-top: 3rem;
`

const SocialIcon = styled.div`
  width: 3rem;
  height: 3rem;
  flex-basis: 3rem;
  align-content: center;
  justify-content: center;
  margin: 1rem;
`


const SocialMenu = ({open}) => {
  return (
    <div>
      <SocialIconContainer open={open}>
        <SocialIcon>
        <a href='https://www.instagram.com/iryna.pohrebniuk/'><InstagramIcon color={colorIcon} /></a>
        </SocialIcon>
        <SocialIcon>
        <a href='https://www.facebook.com/IrynaPohrebniuk'><FacebookIcon color={colorIcon} /></a>
        </SocialIcon>
        <SocialIcon>
          <a href='https://www.linkedin.com/in/iryna-pohrebniuk/'><LinkedinIcon color={colorIcon} /></a>
        </SocialIcon>
      </SocialIconContainer>
    </div>
  )
}

export default SocialMenu