// var v1 = 12
// let l1 = "hi"
// const c1 = 45.7
// console.log(v1)
// v1 = 56 // reassign 
// console.log(v1)
// l1 = "shera"
// console.log(l1);
// const c2 = 98.6
// console.log(c1)


// let a = "4"
// let b =4 
// console.log(a==b)
// console.log(a===b)
// let c = "shera"
// let d = 4.8
// let e = null
// let f = true
// let g
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)


// //NORMAL FUNCTION 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20))

// //ARROW FUNCTION

// let sums = (a,b) => {
//     console.log(a+b);
// }
// sums(10,20)

// let sum1 = (a,b) => console.log(a+b)


// //anamus

// let sum = function(a,b){
//     console.log(a+b)
// }
// sum(5,10)

// let sum = function(){
//     console.log(10+20)
// }
// sum()

// ARRAY
// let a = ["shera","mano","rithish"]
// console.log(a)

//asynchronise example settimeout

// setTimeout(()=>{
//     console.log("delay time")
// },2000)
// console.log("waiting")
// console.log("end")


//syntax for promise

// const mypromise = new Promise ((resolve,reject)=>{
//     let orderPlaced = true
//     if(orderPlaced){
//         setTimeout(()=>{
//     resolve("order successfull")
//     },2000)
       
//     }else{
//         reject("order rejected")
//     }
// })
//console.log(mypromise)

// for this output is like this executed
//Promise { 'order successfull' }

// mypromise.then((result)=>{
//     console.log(result)
// }).
// catch((result)=>{
//     console.log(result)
// }).finally(()=>{
//     setTimeout(()=>{
//     console.log("no orders")
//     },2000)
// })

//assin function

// async function getDatas(){
//     return "hello world"
// }
// console.log(getDatas())

// getDatas().then((res)=>{
//     console.log(res)
// })


// function getDatas(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         console.log("example")
//     },2000)
// })
// }
// getDatas().then((res)=>{
//         console.log(res)
//     })

// function display(){
//     console.log("start")
//     let name=getDatas()
//     console.log("end")
// }


function getDatas(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("delayed time")
    },2000)
})
}

async function display(){
    console.log("start")
    let res=await getDatas()
    console.log("end")
}

display()