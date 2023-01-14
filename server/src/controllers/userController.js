const CustomError = require("../errors/customError")
const UserModel = require("../models/UserModel")

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

const getAllUsers = async (req,res) => {
    const users = await UserModel.find({})
    if(!users) throw new CustomError(500,'No All Users')
    res.status(200).json({Total: users.length,users})
}

module.exports = {
    getHome,
    getError,
    getAllUsers
}