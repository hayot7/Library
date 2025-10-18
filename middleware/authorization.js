const CustomErrorHandle = require("../error/custom-error-handler");
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.AccessToken

        if (!token) {
            throw CustomErrorHandle.UnAuthorazed("Token not found")
        }

        const decode = jwt.verify(token,process.env.ACCESS_SECRET)
        req.user = decode 

        next()
    } catch (error) {
        next(error)
    }
}