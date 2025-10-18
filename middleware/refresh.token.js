const CustomErrorHandle = require("../error/custom-error-handler");
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.RefreshToken

        if (!token) {
            throw CustomErrorHandle.UnAuthorazed("Token not found")
        }

        const decode = jwt.verify(token, process.env.ACCESS_SECRET)
        req.user = decode

        const payload = {
            email: req.user.email,
            id: req.user._id,
            role: req.user.role
        }
        const access_token = accessToken(payload)


        res.cookieStore("AccessToken", access_token, { httpOnly: true, Maxage: 15 * 60 * 1000 })
       

        next()
    } catch (error) {
        next(error)
    }
}