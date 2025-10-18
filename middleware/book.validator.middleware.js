const bookValidator = require("../validator/book.validator")
const bookvalidator = require("../validator/book.validator")

const bookvalidatorMiddleware = (req, res, next) => {
    try {
        const { error } = bookValidator(req.body)
        if (error) {
            throw CustomErrorHandle.badRequiest(error.message)
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = bookvalidatorMiddleware