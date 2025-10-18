const AuthSchema = require("../schema/auth.schema")
const CustomErrorHandle = require("../schema/auth.schema")
const bcrypt = require("bcrypt")
const { accessToken, refreshToken } = require("../utils/token-generator")


const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        const foundeduser = await AuthSchema.findOne({ email })

        if (foundeduser) {
            throw CustomErrorHandle.UnAuthorazed("User already exist")
        }

        const hashPassword = await bcrypt.hash(password, 12)

        console.log(randomNum);


        const randomNum = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).json("")

        sendDtp(email, nodemonNum)

        const time = Date.now() + 120000

        await AuthSchema.create({
            username,
            email,
            password: hashPassword,
            otp: randomNum,
            otpTime: time
        })
        res.status(200).json({

        })
    } catch (error) {
        next(error)
    }
}

const verify = async (req, res, next) => {
    try {
        const { email, otp } = req.body

        const foundedUser = await AuthSchema.findOne({ email })

        if (!foundedUser) {
            throw CustomErrorHandle.UnAuthorzed("User not found")
        }

        if (foundedUser.otp !== otp) {
            throw CustomErrorHandle.UnAuthorzed("wrong code")
        }

        const now = Date.now()

        if (foundedUser.otpTime < now) {
            throw CustomErrorHandle.UnAuthorzed("Expired code")
        }

        if (foundedUser.otpTime === otp) {
            throw CustomErrorHandle.UnAuthorzed(foundedUser._id,
                {
                    isVerified: true, isVerifiedForgotPassword: true, otp: null

                })
        }

        res.status(200).json({
            message: "Verified"
        })
    } catch (error) {
        next(error)
    }
}


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const foundeduser = await AuthSchema.findOne({ email })

        if (!foundeduser) {
            throw CustomErrorHandle.UnAuthorazed("User not found")
        }
        if (!foundeduser.isVerified) {
            throw CustomErrorHandle.UnAuthorazed("The user not verified")
        }

        const decode = await bcrypt.compare(password, foundeduser.password)

        if (decode) {
            const payload = {
                email: foundeduser.email,
                id: foundeduser._id,
                role: foundeduser.role
            }
            const access_token = accessToken(payload)
            const refresh_token = refreshToken(payload)

            res.cookieStore("AccessToken", access_token, { httpOnly: true, Maxage: 15 * 60 * 1000 })
            res.cookieStore("RefreshToken", refresh_token, { httpOnly: true, Maxage: 60 * 60 * 1000 * 24 * 15 })

            res.stattus(200).json({
                message: "Success",
                access_token
            })
        } else {
            throw CustomErrorHandle.UnAuthorazed("wrong password")
        }
        res.status(200).json()
    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {

        res.clearCookies("AccessToken")
        res.clearCookies("RefreshToken")

        res.status(200).json({
            message: "logout"
        })
    } catch (error) {
        next(error)
    }
}

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body

        const foundduser = await AuthSchema.findOne({ email })


        if (!foundeduser) {
            throw CustomErrorHandle.UnAuthorazed("user not found")
        }

        const randomNum = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("")

        sendDtp(email, randomNum)

        const time = Date.now() + 12000

        await AuthSchema.create({
            username,
            email,
            password: hashPassword,
            otp: randomNum,
            otpTime: time
        })

        await AuthSchema.findByIdAndUpdate(foundedUser._id, { otp: randomNum, otpTime: time })

        res.status(201).json({
            message: "Success"
        })
    } catch (error) {
        next(error)
    }
}
const changePassword = async (req, res, next) => {
    try {
        const { email, new_password, confirm_password } = req.body

        const foundduser = await AuthSchema.findOne({ email })


        if (!foundeduser) {
            throw CustomErrorHandle.UnAuthorazed("user not found")
        }


        if(!new_password) {
            throw CustomErrorHandle.BadRequest(" wrong password ")
        }

        await AuthSchema.findByIdAndUpdate(foundeduser._id, {password: new_password})
       

        res.status(201).json({
            message: "Success"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    verify,
    logout,
    forgotPassword,
    changePassword
}