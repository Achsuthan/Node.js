const express = require('express')
const router = express.Router()


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

router.get('/', (req,res)=>{
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
// router.get('/api/courses/:id',(req,res) =>{
//     res.send(req.params.id)
// })

//get multiple router paramter
router.get('/:year/:month',(req,res) =>{
    res.send(JSON.stringify({
        "year" : req.params.year,
        "month": req.params.month
    }))
})



//get details based on  the id from course JSON array 
//get only one router paramter
router.get('/:id',(req,res) =>{
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
router.post('/',(req,res)=>{
    const course = {
        id: courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

//put method 
router.put('/:id',(req,res) =>{
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
router.delete('/:id',(req,res)=>{
    let course = courses.find((c)=> c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send("id is not found")
    }
    else {
        res.send(course)
    }
})

module.exports = router