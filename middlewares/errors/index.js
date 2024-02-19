module.exports.handleErrorMW = async (err, req, res, next) => {
  res.send(`ERROR: ${err}`);
};
