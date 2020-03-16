import React from 'react'
import './icons/wechat.svg'


interface IconProps{
    name:string
}

const Icon: React.FunctionComponent<IconProps> = (props)=>{
    return (
           <svg>
                {/* <use xlinkHref={`#${props.name}`}></use> */}
                <use xlinkHref={'#wechat'}></use>
                
           </svg>

    )

}
export default  Icon
