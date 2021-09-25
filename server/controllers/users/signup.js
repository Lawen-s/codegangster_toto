const { User } = require('../../models');

const crypto = require('crypto');

module.exports = (req, res) => {
  const { userId, password } = req.body;

  let inputPassword = body.password;
  let salt = Math.round(new Date().valueOf() * Math.random()) + '';
  let hashPassword = crypto
    .createHash('sha512')
    .update(inputPassword + salt)
    .digest('hex');

  User.findOne({
    where: {
      userId
    }
  })
    .then((data) => {
      if (!data) {
        return res.status(403).json({ data: null, message: 'duplicate id' });
      }
    })
    .catch((err) => {
      res.json(err);
    });

  User.create({
    userId: req.body.userId,
    password: hashPassword,
    email: req.body.email,
    salt: salt
  });
};
