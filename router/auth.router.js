const {Router} = require("express")
const { register, verify, login, logout, forgotPassword } = require("../controller/auth.controller")
const refreshToken = require("../middleware/refresh.token")
const { changePassword } = require("../controller/profile.controller")



const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/verify", verify)
authRouter.post("/login", login)
authRouter.get("logout", logout)
authRouter.get("refresh", refreshToken)
authRouter.post("auth_change_password", changePassword)
authRouter.post("forgot_password", forgotPassword)


module.exports = authRouter