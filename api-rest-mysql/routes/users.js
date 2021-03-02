const express = require("express");
const { verifyToken, verifyRole } = require("../middlewares/auth");
const {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/UserService");

const app = express();
// GET (listar los usuarios)
app.get("/users", [verifyToken, verifyRole], async (req, res) => {
  try {
    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 5;
    limit = Number(limit);
    const attributes = ['id', 'firstName', 'lastName', 'email', 'role'];
    return res.json(await getUsers(from, limit, null, attributes));
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: e.message,
    });
  }
  // getUsers().then(users => {
  //     return res.json(users);
  // });
});

// GET (obtener un usuario por su id)
app.get("/users/:userId", [verifyToken], async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await getUserById(userId);
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
});

// POST (crear un usuario)
app.post("/users", async (req, res) => {
  try {
    const body = req.body;
    const user = await addUser(body);
    return res.status(201).json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: e.message,
    });
  }
});

// PUT // UPDATE (actualizar un usuario)
app.put("/users/:userId", [verifyToken], async (req, res) => {
  try {
    const userId = req.params.userId;
    let body = req.body;
    const user = await updateUser({ userId, ...body });
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});

// DELETE (eliminar un usuario)
app.delete("/users/:userId", [verifyToken, verifyRole], async (req, res) => {
  try {
    let userId = req.params.userId;
    const userDeleted = await deleteUser(userId);
    return res.json({
      user: userDeleted
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
});
module.exports = app;
