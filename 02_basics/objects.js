// Singleton - object when made with constructor

//Object literals
// const mysym = Symbol("key1")
// const user = {
//     name:"manas",
//     [mysym]:"mykey1",
//     rollno:66,
// email: "manastamboli2@gmail.com"
// }
// console.log(user["email"])
// console.log([user])
// console.log(user[mysym])

// user.hello = function(){
//     console.log(`Hello,${this.name}`)
// }
// console.log(user.hello())


// Singleton object:
// const insta =new Object()
// insta.id = "abc"
// insta.user ="manas"
// insta.email = 66
// console.log(insta)



// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));

//destructuring
const course = {
    teacher:"hitesh",
    name:"js",
    duration:3
}

const {teacher: tea} = course

// console.log(courseInstructor);
console.log(tea);


// JSON API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]