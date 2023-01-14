require('express-async-errors')
const express = require('express')
const errorMiddleware = require('./src/middlewares/errorMiddleware')
const notFound = require('./src/middlewares/notFound')
const userRouter = require('./src/routers/userRouter')
const server = express()

// Middleware
server.use(userRouter)
server.use(notFound)
server.use(errorMiddleware)

const startServer = async () => {
    try {
        const port = process.env.PORT || 5000

        server.listen(port,console.log(`Server is running on ${port}`))
    } catch (error) {
        console.log(`Server is stopped due to error: ${error}`)
    }
}

startServer()