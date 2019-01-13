let func = (req,res,next) =>{
    console.log("Logger function")
    next()
}

module.exports = func