const { isAuthorized } = require('../tokenFunctions');
const { User } = require('../../models');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    return res.status(401).send("no token in req.headers['authorization']");
  }
  const { userId } = accessTokenData;
  User.findOne({ where: { userId } })
    .then((data) => {
      if (!data) {
        return res.status(401).send({ data: null, message: 'not authorized' });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues }, message: 'ok' });
    })
    .catch((err) => {
      console.log(err);
    });
};
