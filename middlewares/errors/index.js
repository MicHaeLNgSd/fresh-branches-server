module.exports.handleError1MW = async (err, req, res, next) => {
  if (err === 'basic error') res.send(`ERROR1: ${err}`);
  else next(err);
};
module.exports.handleError2MW = async (err, req, res, next) => {
  res.send(`ERROR2: ${err}`);
};
