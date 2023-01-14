const CustomError = require("../errors/customError")

const errorMiddleware = (err,req,res,next) => {
    console.log('Hit Error Middleware')
    if( err instanceof CustomError){
        const status = err.statusCode || 500
        const message = err.statusMessage || 'Something Went Wrong...!'
        res.status(status).json({message})
    }else{
        res.status(500).json({Error: err.message})
    }
}

module.exports = errorMiddleware