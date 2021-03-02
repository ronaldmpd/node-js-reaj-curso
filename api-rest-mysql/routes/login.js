const express = require("express");

const { getToken, isValidPassword } = require("../services/AuthService");
const { getUserByEmail } = require("../services/UserService");

const app = express();

app.post("/login", async (req, res) => {
  try {
    let body = req.body;
    const user = await getUserByEmail(body.email);
    if (!user) {
      return res.status(401).json({
        message: "Email o Password es incorrecto",
      });
    }
    if (!isValidPassword(body.password, user.password)) {
      return res.status(401).json({
        message: "Email o Password es incorrecto",
      });
    }
    const token = getToken(user);
    res.json({
      user,
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
});

module.exports = app;
