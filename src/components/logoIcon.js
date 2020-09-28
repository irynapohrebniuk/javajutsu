import React from 'react'
import { theme } from '../styledComponents/theme'


const LogoIcon = (props) => {
    return (
        <svg height="50" width="150">
            <polyline points="20,25 10,45 22,45 25,40 28,45 40,45 30,25 21,25 25,30 30,25 35,15 32,10 30,15 20,15 18,10 15,15 20,25" 
                        fill='none' strokeWidth='3px' 
                        stroke = {(props.open) ? theme.primaryLight : theme.primaryDark} />
        <text x="75" y="25" className='java'>ava</text>
        <text x="75" y="45" className='jutsu' fill={(props.open) ? theme.primaryLight : theme.primaryDark}>utsu</text>
        <text x="50" y="45" className='j' fill={(props.open) ? theme.primaryLight : theme.primaryDark}>J</text>
        </svg>
    )
}

export default LogoIcon