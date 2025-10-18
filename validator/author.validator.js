const joi = require("joi")

const authorValidator = (data) => {
    const schema  = joi.object({
        full_name: joi.string().trim().min(3).max(80).required(),
        birth_date: joi.number().integer().trim().min(3).max(2020).required(),
        death_date: joi.string().min(1).required(),
        img: joi.string().trim().min(3).max(80).required(),
        bio: joi.string().trim().min(3).max(80).required(),
        creativity: joi.string().trim().required(),
        region:joi.string().trim().min(3).max(80).required(),
        period: joi.string().trim().min(3).max(80).required(),
    })

    return schema.validate(data)
}

module.exports = authorValidator

