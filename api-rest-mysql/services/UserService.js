const bcrypt = require("bcrypt");
const UserRepository = require("../repositories/UserRepository");

const getUsers = async (from, limit, filters, attributes) => {
  let defaultFilters = {
    state: true,
  };
  if (!filters) {
    filters = defaultFilters;
  } else {
    filters = { ...defaultFilters, ...filters };
  }
  const data = await UserRepository.getUsers(from, limit, filters, attributes);
  return data;
};

const getUserById = async (id) => {
  return await UserRepository.getUserById(id);
};

const getUserByEmail = async (email) => {
  return await UserRepository.getUserByEmail(email);
};

const addUser = async ({
  firstName,
  lastName,
  email,
  password,
  img,
  role,
  state,
}) => {
  // modificar el user o utilizar desestructuracion
  // 1) admin123 => $w@#@1$##!@
  // 2) $w@#@1$##!@ => $sadsa$#qweq#$12SASdf
  // 3) $sadsa$#qweq#$12SASdf => .......

  // 10)
  return await UserRepository.addUser({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    img,
    role,
    state,
  });
};

const updateUser = async ({
  userId,
  firstName,
  lastName,
  email,
  password,
  img,
  role,
}) => {
  const user = await UserRepository.updateUser({
    userId,
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
    img,
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await UserRepository.deleteUser(id);
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
