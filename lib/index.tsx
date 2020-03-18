import React from 'react'
import ReactDom from 'react-dom'
// import Button from './button'
import Icon from './icon'

const fn:React.MouseEventHandler =(e)=>{
    console.log(e)
}
ReactDom.render(<div><Icon name="alipay" onClick={fn}/></div>, document.querySelector('#root'));