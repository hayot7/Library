const CustomErrorHandler = require("../error/custom-error-handler")

module.exports = function(err, req, res, next) {
   try {
     if (err instanceof CustomErrorHandler) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    if (err.name === "ValidationError") {
        const ValidationErrors = Object.values(err.errors).map((item) => item.message)
        return res.status(400).json({
            message: "ValidationError",
            errors: ValidationErrors
        })
    }
    
    next()
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}