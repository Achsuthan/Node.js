//this p promise is used to send the result
const p = new Promise((resolve,reject) =>{
    setTimeout((handler)=>{
        resolve(1)
    },2000)
})

p.then(result =>console.log("result"))

//this is used for fail
const pp = new Promise((resolve,reject) =>{
    setTimeout((handler)=>{
        reject(new Error("Hello error"))
    },2000)
})

pp.then(result =>console.log("result")).catch((error)=> console.log(error.message))


//Parallel Promise

//this p promise is used to send the result
const p1 = new Promise((resolve,reject) =>{
    setTimeout((handler)=>{
        console.log("Test P1")
        resolve(1)
    },2000)
})


//this is used for fail
const p2 = new Promise((resolve,reject) =>{
    setTimeout((handler)=>{
        reject(new Error("Hello error"))
    },2000)
})

Promise.all([p1,p2])
    .then(result => console.log(result))
    .catch(error => console.log(error.message))