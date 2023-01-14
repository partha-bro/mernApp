const express = require('express')
const server = express()

const startServer = async () => {
    try {
        const port = process.env.PORT || 5000

        server.listen(port,console.log(`Server is running on ${port}`))
    } catch (error) {
        console.log(`Server is stopped due to error: ${error}`)
    }
}

startServer()