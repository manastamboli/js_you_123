// Primitive data types:
//7 Types : Number,String,Boolean,null,undefined,BigInt,symbol

const id = Symbol('123')
const anid = Symbol('123')
console.log(id==anid)
//reference(non-primitive) types
//arrays,objects,functions


const heros = ["batman","superman"];
let myobj={
    number:12,
    String:"manas"
}
console.log(myobj)
let temp = null
console.log(typeof(temp))
//Javascript is dyanamically typed