const {
  userValidator,
  userLoginValidator,
} = require("../helpers/authValidator");

const checkUser = async (req, res, next) => {
  const { error } = userValidator(req.body);

  if (error) {
    return res.status(400).json({
      message: `field ${error.details[0].context.key} is required or invalid`,
    });
  }

  next();
};

const checkUserLogin = async (req, res, next) => {
  const { error } = userLoginValidator(req.body);

  if (error) {
    return res.status(400).json({
      message: `field ${error.details[0].context.key} is required or invalid`,
    });
  }

  next();
};

module.exports = { checkUser, checkUserLogin };
