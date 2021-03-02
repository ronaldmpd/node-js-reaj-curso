const PORT = process.env.PORT || 3000;
const SEED = process.env.SEED || "este-es-el-seed-desarrollo";
// 60 seg * 60 min * 24hrs * 30 days
const TIME_TOKEN = process.env.TIME_TOKEN || 60 * 60 * 24 * 30;
// const development = {
//   username: process.env.USERNAME || "root",
//   password: process.env.PASSWORD || "",
//   database: process.env.DATABASE || "social-net-dev",
//   host: process.env.HOST || "127.0.0.1",
//   dialect: process.env.DIALECT || "mysql",
// };

const development = {
  username: "root",
  password: "",
  database: "social-net-dev",
  host: "127.0.0.1",
  dialect: "mysql",
};

const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
};
const production = {
  username: "root",
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql",
};
module.exports = {
  PORT,
  SEED,
  TIME_TOKEN,
  development,
  test,
  production,
};
