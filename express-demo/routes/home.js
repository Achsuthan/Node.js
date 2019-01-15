const express = require('express')
const router = express.Router()



router.get('/',(req,res)=>{
    res.render('index',{title: "MyExpress APP", message:"this is a message"})
})

//get router query
router.get('/api/query',(req,res) =>{
    res.send(req.query)
})

module.exports = router