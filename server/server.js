const express = require('express')
const userRouter = require('./src/routers/userRouter')
const server = express()

server.use(userRouter)

const startServer = async () => {
    try {
        const port = process.env.PORT || 5000

        server.listen(port,console.log(`Server is running on ${port}`))
    } catch (error) {
        console.log(`Server is stopped due to error: ${error}`)
    }
}

startServer()