const classes =(...names:(string | undefined)[])=>{ //ts语法，函数的所有参数，类型是字符串数组
    console.log(names,'name')    //name = []
    return names.filter(Boolean).join(' ')    //names 里面有元素的时候才输出，没有也不会为空
}
export default classes