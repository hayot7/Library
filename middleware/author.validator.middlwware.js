const CustomErrorHandle = require("../error/custom-error-handler")
const authorValidator = require("../validator/author.validator")

const authorvalidatorMiddleware = (req, res, next) => {
    try {
        const { error } = authorValidator(req.body)
        if (error) {
            throw CustomErrorHandle.badRequiest(error.message)
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authorvalidatorMiddleware