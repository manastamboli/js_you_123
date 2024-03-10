//**************************Dates**************** */
// let myddate =new Date()
// console.log(myddate)

// console.log(myddate.toDateString())
// console.log(myddate.toString())
// console.log(myddate.toLocaleString())
// let createmydate = new Date("2023-01-14")
// console.log(createmydate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp)
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "narrow"
})
