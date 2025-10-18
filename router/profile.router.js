const {Router} = require("express")
const { setProfile, getProfile, changePassword } = require("../controller/profile.controller")
const authorization = require("../middleware/authorization")



const profileRouter = Router()

profileRouter.post("/set_info", authorization, setProfile)
profileRouter.get("/get_profile_info", authorization, getProfile)
profileRouter.get("/change_password", authorization, changePassword)


module.exports = profileRouter