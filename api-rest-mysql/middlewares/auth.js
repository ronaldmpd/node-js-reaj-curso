const { validateToken, isAdmin } = require("../services/AuthService");
/**
 * Verify token
 */
let verifyToken = (req, res, next) => {
  let token = req.get("Authorization");
  token = token ? token.split(" ")[1] : null;
  const { decoded, err } = validateToken(token);
  if (err) {
    return res.status(401).json({
      message: "token es invalido",
    });
  }
  req.user = decoded.user;
  next();
};

let verifyRole = (req, res, next) => {
    let user = req.user;
    if(!isAdmin(user)) {
        return res.status(401).json({
            message: 'Necesita rol de administrador'
        });
    }
    next();
};

module.exports = {
  verifyToken,
  verifyRole,
};
