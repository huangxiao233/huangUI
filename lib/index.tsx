import React from 'react'
import ReactDom from 'react-dom'
// import Button from './button'
import Icon from './icon/icon'

const fn:React.MouseEventHandler =(e)=>{
    console.log(e)
}
ReactDom.render(<div> <Icon name="qq" className="fuck"
onClick={fn}
onMouseEnter={() => console.log('enter')}
onMouseLeave={() => console.log('leave')}
onTouchStart={() => console.log('touch')}
/></div>, document.querySelector('#root'));