const { REGISTRATION_SCHEMA } = require('../validation/userSchemas');
module.exports.validateRegistrationMW = async (req, res, next) => {
  try {
    // validate coz async
    const validatedUser = REGISTRATION_SCHEMA.validate(req.body);
    req.user = validatedUser;
    next();
  } catch (err) {
    res.send(err.message);
  }
};
