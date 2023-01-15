require('dotenv').config()
const jwt = require('jsonwebtoken');
const CustomError = require('../errors/customError');

const auth = (req,res,next) => {
    const authToken = req.headers.authorization
    if(authToken && authToken.startsWith('Bearer ')){
        const token = authToken.split(' ')[1]
        const user = jwt.verify(token,process.env.JWT_SECRET)
        res.user = {...user}
        next()
    }
    else{
        throw new CustomError(404,'No Token Provided!')
    }
}

module.exports = auth