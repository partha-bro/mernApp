class CustomError extends Error{
    constructor(statusCode,statusMessage){
        super(statusMessage)
        this.statusCode = statusCode
        this.statusMessage = statusMessage
    }
}

module.exports = CustomError