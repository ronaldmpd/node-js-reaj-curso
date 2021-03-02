const bcrypt = require("bcrypt");
const PostRepository = require("../repositories/PostRepository");

const getPosts = async (from, limit, filters, attributes) => {
  let defaultFilters = {
    state: true,
  };
  if (!filters) {
    filters = defaultFilters;
  } else {
    filters = { ...defaultFilters, ...filters };
  }
  const data = await PostRepository.getPosts(from, limit, filters, attributes);
  return data;
};

const getPostById = async (id) => {
  return await PostRepository.getPostById(id);
};

const addPost = async ({
  description,  
  state,
  img
}) => {  
  return await PostRepository.addPost({
    description,            
    state,
    img,
  });
};

const updatePost = async ({
  postId,
  description,  
  img,  
}) => {
  const post = await PostRepository.updatePost({
    postId,
    description,    
    img,
  });
  return post;
};

const deletePost = async (id) => {
  const post = await PostRepository.deletePost(id);
  return post;
};

module.exports = {
  getPosts,
  getPostById,  
  addPost,
  updatePost,
  deletePost,
};
