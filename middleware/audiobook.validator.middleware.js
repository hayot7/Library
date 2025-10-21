const { audioBookValidator } = require("../validator/audiobook.validator");

const audioBookValidatorMiddleware = (req, res, next) => {
  const { error } = audioBookValidator.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = audioBookValidatorMiddleware;
