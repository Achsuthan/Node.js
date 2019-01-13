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


//get the port form envirment if not asign it as a static vlaue 3000
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
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