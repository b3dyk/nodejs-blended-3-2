const {
  bookValidator,
  bookUpdateValidator,
  isReadValidator,
} = require("../helpers/bookValidator");

const checkBody = (req, res, next) => {
  if (!Object.keys(req.body).length)
    return res.status(400).json({ message: "Missing fields" });

  const { value, error } = bookValidator(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: `field ${error.details[0].context.key} is required` });
  }

  req.body = value;
  next();
};

const checkHasBody = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const { error } = bookUpdateValidator(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: `field ${error.details[0].context.key} is required` });
  }

  next();
};

const checkIsRead = (req, res, next) => {
  if (req.body.isRead === undefined) {
    return res.status(400).json({ message: "Missing isRead field" });
  }

  if (Object.keys(req.body).length > 1) {
    return res.status(400).json({ message: "Too many fields, take it easy" });
  }

  const { error } = isReadValidator(req.data);

  if (error) {
    return res.status(400).json({ message: `field isRead is required` });
  }

  next();
};

module.exports = { checkBody, checkHasBody, checkIsRead };
