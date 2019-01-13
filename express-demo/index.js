const config = require("config")
const express = require('express')
const app = express()
const logger = require("./logger")
//enable json to body
app.use(express.json()) //build in middleware function in node.js
app.use(express.static("public")) //this static middleware used to store the public files like css image etc..

const courses = [
    {
        id: 1,
        name: 'A'
    },
    {
        id:2,
        name: 'B'
    },
    {
        id:3,
        name:'C'
    }
]

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/api/course', (req,res)=>{
    res.send(JSON.stringify([{
        subject: "a",
        subjectCode : "abc"
    },
    {
        subject: "a",
        subjectCode : "abc"
    },
]))
})


//get only one router paramter
// app.get('/api/courses/:id',(req,res) =>{
//     res.send(req.params.id)
// })

//get multiple router paramter
app.get('/api/course/:year/:month',(req,res) =>{
    res.send(JSON.stringify({
        "year" : req.params.year,
        "month": req.params.month
    }))
})

//get router query
app.get('/api/query',(req,res) =>{
    res.send(req.query)
})

//get details based on  the id from course JSON array 
//get only one router paramter
app.get('/api/course/:id',(req,res) =>{
    let course = courses.find((c)=> c.id
         === parseInt(req.params.id))
    if(!course){ //404 error not found
        res.status(404).send('The course with the givin ID was not available')
    }
    else{
        res.send(course)
    }
})

//post method 
app.post('/api/course',(req,res)=>{
    const course = {
        id: courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

//put method 
app.put('/api/course/:id',(req,res) =>{
   let course = courses.find((c)=> c.id === parseInt(req.params.id))
       if (!course){
           res.status(404).send("id is not found")
       }
       else {
           course.name = req.body.name
           res.send(course)
       }
})

//delte method
app.delete('/api/course/:id',(req,res)=>{
    let course = courses.find((c)=> c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send("id is not found")
    }
    else {
        res.send(course)
    }
})


/*
    Middleware function
*/
app.use((req,res,next) => { //next is used to pass the flow form middle ware to restofthem
    console.log("Login")
    next()
})

/**
 * Now Do the same middleware function in seperate class
 */

 app.use(logger)


 /**
  * How to run a spesific funtion in development 
  */

  //app.get("env") will give bydefault development
  //we can change the env variable through terminal 
  //EXPORT NODE_ENV=production
  //once i run the above line app.get("env") will give the production

if (app.get("env") === "development"){
    console.log("Hello Development")
}
else {
    console.log("Hello Production")
}

/**
 * Config package 
 */
// default.json when if  NODE_ENV is not set this application will get the details get it from this file 
// development.json when if the NODE_ENV is development
// production.json when if the NODE_ENV is production
console.log("Application name "+config.get("name"))
console.log("Mail Server "+ config.get("mail.host"))


//if you want to store password don't store it in the config json files, store it in the env 
//For example if you want to store the password "export password=123" it will store the password as a env variable 

//get the port form envirment if not asign it as a static vlaue 3000
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
})


