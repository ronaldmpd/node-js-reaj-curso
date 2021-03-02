const User = require("../models").User;

const getUsers = async (from, limit, filters, attributes) => {
  const data = await User.findAndCountAll({
    limit,
    offset: from,
    where: filters,
    attributes,
  });
  return data;
};

const getUserById = async (id) => {
  return await User.findOne({ where: { id } });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const addUser = async ({
  firstName,
  lastName,
  email,
  password,
  role,
  state,
  img,
}) => {
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role,
    img,
    state,
  });
  return user;
};

const updateUser = async ({
  userId,
  firstName,
  lastName,
  email,
  password,
  role,
  state,
  img,
}) => {
  const user = await User.update(
    { firstName, lastName, email, password, role, state, img },
    { where: { id: userId } }
  );
  return user;
};

const deleteUser = async (id) => {
  const deleteState = {
    state: false,
  };
  const user = await User.update(deleteState, { where: { id } });
  return user;
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
};
