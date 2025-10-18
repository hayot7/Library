const jwt = require("jsonwebtoken")

const accessToken = (payload) => {
    try {
        return jwt.sign (payload, proccess.env.ACCESS_SECRET, { expiresIn: "15m"})
    } catch (error) {
        throw new Error(error.message)
    }
}

const refreshToken = (payload) => {
    try {
        return jwt.sign (payload, proccess.env.ACCESS_SECRET, { expiresIn: "15d"})
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    accessToken,
    refreshToken
}