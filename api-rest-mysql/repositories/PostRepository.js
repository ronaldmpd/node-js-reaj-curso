const Post = require("../models").Post;

const getPosts = async (from, limit, filters, attributes) => {
  const data = await Post.findAndCountAll({
    limit,
    offset: from,
    where: filters,
    attributes,
  });
  return data;
};

const getPostById = async (id) => {
  return await Post.findOne({ where: { id } });
};

// const getUserByEmail = async (email) => {
//   return await User.findOne({ where: { email } });
// };

const addPost = async ({
  description,  
  state,
  img,
}) => {
  const post = await Post.create({
    description,    
    img,
    state,
  });
  return post;
};

const updatePost = async ({
  postId,
  description,
  state,
  img,
}) => {
  const post = await Post.update(
    { description, state, img },
    { where: { id: postId } }
  );
  return post;
};

const deletePost = async (id) => {
  const deleteState = {
    state: false,
  };
  const post = await Post.update(deleteState, { where: { id } });
  return post;
};

module.exports = {
  getPosts,
  getPostById,  
  addPost,
  updatePost,
  deletePost,
};
