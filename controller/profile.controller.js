const CustomErrorHandle = require("../error/custom-error-handler")
const bcrypt = require("bcryptjs")
const setProfile = async (req, res, next) => {
    try {
        const { firstName, LastName, phoneNumber, email } = req.body

        if (req.user) {
            if (req.user.email) {
                throw CustomErrorHandle.UnAuthorazed("This email is not yours")
            }

            await AuthSchema.findByUpdate(req.user._id, { firstName, LastName, phoneNumber, img })

            return res.status(200).json({
                message: "Updated"
            })
        } else {
            throw CustomErrorHandle.UnAuthorazed("req.user not found")

        }
    } catch (error) {
        next(error)
    }
}

const getProfile = async (req, res, next) => {
    try {
        if (req.user) {
            const profil = await AuthSchema.findById(req.user.id)

            return res.status(200).json(profile)
        } else {
            throw CustomErrorHandle.UnAuthorazed("req.user not found")

        }
    } catch (error) {
        next(error)
    }
}

const changePassword = async (req, res, next) => {
    try {
        const { email, current_password, new_password, confirm_password } = req.body

        if (req.user) {
            if(req.user.email !== email){
                throw CustomErrorHandle.UnAuthorazed("This email is not yours")
            }

            const foundeduser = await AuthSchema.findOne({email})

            const decodePassword = await bcrypt.compare(current_password, foundeduser.password)

            if(decodePassword && new_password === confirm_password){
                await AuthSchema.findByIdAndUpdate(foundeduser._id, {password: new_password})
                return res.status(200).json({
                    message:"Success"
                })
            }
        } else {
            throw CustomErrorHandle.UnAuthorazed("req.user not found")

        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    setProfile,
    getProfile,
    changePassword
}