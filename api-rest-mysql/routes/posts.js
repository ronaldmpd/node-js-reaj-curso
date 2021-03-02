const express = require("express");
const { verifyToken, verifyRole } = require("../middlewares/auth");
const {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../services/PostService");

const app = express();

// GET (lista de posts)
app.get("/posts", [verifyToken], async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'description', 'state'];
      return res.json(await getPosts(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }    
  });

// GET (obtener un post por su id)
app.get("/posts/:postId", [verifyToken], async (req, res) => {
    try {
      const postId = req.params.postId;
      const post = await getPostById(postId);
      return res.json(post);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

  // POST (crear post)
  app.post("/posts", async (req, res) => {
    try {
      const body = req.body;
      const post = await addPost(body);
      return res.status(201).json(post);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });

// PUT // UPDATE (actualizar un post)
app.put("/posts/:postId", [verifyToken], async (req, res) => {
    try {
      const postId = req.params.postId;
      let body = req.body;
      const user = await updatePost({ postId, ...body });
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });

// DELETE (eliminar un post)
app.delete("/posts/:postId", [verifyToken, verifyRole], async (req, res) => {
    try {
      let postId = req.params.postId;
      const postDeleted = await deletePost(postId);
      return res.json({
        post: postDeleted
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });

module.exports = app;
