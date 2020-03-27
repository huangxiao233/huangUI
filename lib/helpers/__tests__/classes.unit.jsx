import classes from '../classes'
import 'jest'

describe(name:'classes',()=>{
    it(name:'接受一个className',()=>{
        const result = classes(names:'a')
        expect(result).toEqual(expected:'a')
    })
})