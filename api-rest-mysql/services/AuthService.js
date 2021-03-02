const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SEED, TIME_TOKEN } = require("../config/config");

const getToken = (user) => jwt.sign({ user }, SEED, { expiresIn: TIME_TOKEN });

const isValidPassword = (password, dbPassword) =>
  bcrypt.compareSync(password, dbPassword);

const validateToken = (token) => {
  try {
    let decoded = jwt.verify(token, SEED);
    return { decoded, err: null };
  } catch (e) {
    return { decoded: null, err: e };
  }
};

const isAdmin = (user) => user.role === "ADMIN_ROLE";

module.exports = {
  getToken,
  isValidPassword,
  validateToken,
  isAdmin,
};
