const classes =(...names:(string | undefined)[])=>{
    console.log(...names,'name')
    return names.filter(Boolean).join(' ')
}
export default classes