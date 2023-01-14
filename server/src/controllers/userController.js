const CustomError = require("../errors/customError")

// Home controller [for developing]
const getHome = (req,res) => {
    res.json({message: 'Home'})
}

// Error controller [for developing]
const getError = (req,res) => {
    // normal error class
    // throw new Error('Check Error middleware')

    // Custom Error Class
    throw new CustomError(500,'Check Custom Error middleware')
    res.json({message: 'Error message'})
}

module.exports = {
    getHome,
    getError
}