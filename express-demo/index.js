const config = require("config") // this is used to stroe the values in the production and development 
const startupDebugger = require('debug')('app:startup') //this is the debugger module; use it when we have devmode and 'app:startup' is a function name which will use it later for call the dubugger function
//we have to set the env variable "DEBUG" variable or we can set the DEBUG when run the file "DEBUG=<NAME> node <FILE_NAME.js>"
const dbDebugger = require('debug')('app:db')
const express = require('express')
const app = express()
const logger = require("./logger")
const courses = require('./routes/courses')
const home = require('./routes/home')
app.set('view engine','pug')
app.set('views','./views')



//enable json to body
app.use(express.json()) //build in middleware function in node.js
app.use(express.static("public")) //this static middleware used to store the public files like css image etc..

app.use('/api/course',courses)
app.use('/',home)



/*
    Middleware function
*/
app.use((req,res,next) => { //next is used to pass the flow form middle ware to restofthem
    console.log("Login")
    startupDebugger('Login middleware function')
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


