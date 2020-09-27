import React from 'react'
import { theme } from '../styledComponents/theme'

const LogoIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width={props.width} height={props.height} viewBox="0 0 48 48">

            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
                fill={(props.open)? theme.primaryLight : theme.primaryDark} stroke="none">
                <path d="M155 388 c-10 -18 -22 -35 -26 -38 -4 -3 9 -32 28 -65 39 -66 40 -53
                -19 -152 l-20 -33 112 0 112 0 -20 33 c-59 99 -58 86 -19 152 19 33 32 62 28
                65 -4 3 -16 20 -26 38 -11 17 -22 32 -26 32 -3 0 -14 -16 -25 -35 -10 -19 -21
                -35 -24 -35 -3 0 -14 16 -24 35 -11 19 -22 35 -25 35 -4 0 -15 -15 -26 -32z"/>
            </g>
        </svg>
    )
}

export default LogoIcon