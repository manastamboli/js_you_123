function add(num1,num2){
    return num1+num2
    // no statements after return statement 
}
let res = add(3,4)
console.log("result:",res)

function user (username){
    return `${username} just loggedin`
}
console.log(user("manas"))

const user1 ={
    name :"manas",
    rollno : 66
}

function myobj (anyobject){
    console.log(`my name is${anyobject.name} and rollno is${anyobject.rollno}`)


}

myobj(user1)