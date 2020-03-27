import React from 'react'
import './importAllIcon'
import './icon.scss'
import classes from '../helpers/classes'
interface IconProps extends  React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = ({className ,name, ...restProps}) => {
    // const  {className ,...restProps}= props
    // console.log(props,'props',restProps,'-----restprops',{...restProps},'{...restProps}')
    return (
        //外面的{}是JSX的语法，里面的...是为了把属性都给这个reactElement
            <svg className={classes('huangUI-icon',className)}  {...restProps}>  
                <use xlinkHref={`#${name}`}></use>
            </svg>
    )
}
export default Icon
