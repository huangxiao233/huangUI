import React from 'react'
import './icons/wechat.svg'
import './icons/qq.svg'
import './icons/alipay.svg'


interface IconProps{
    name:string
}

const Icon: React.FunctionComponent<IconProps> = (props)=>{
    return (
        //    <svg>
        //         {/* <use xlinkHref={`#${props.name}`}></use> */}
        //         <use xlinkHref={'#wechat'}></use>       
        //    </svg>
          
        <div>
        <svg>
            <use xlinkHref={'#alipay'}></use>        
        </svg>
        <svg>
            <use xlinkHref={'#qq'}></use>    
        </svg>
         <svg>
         <use xlinkHref={'#wechat'}></use>        
        </svg>
        </div>

    )

}
export default  Icon
