import React from 'react'
import './importAllIcon'
import './icon.scss'
interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
            <svg className="huangUI-icon ">
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
    )

}
export default Icon
