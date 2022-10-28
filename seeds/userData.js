const { User } = require("../models");
const bcrypt = require("bcrypt");

const userdata = [
  {
    username: "LebronJames",
    password: "$2b$10$9wj6oyVUbGkoLcdRMZvjIeFrlejJmITobGTtcD83TTQzuyYrFK6vm",
  },
  // {
  //   username: "BenKing",
  //   password: "abc111",
  // },
  // {
  //   username: "AdrienDean",
  //   password: "abc222",
  // },
  // {
  //   username: "LebronJames",
  //   password: "abc333",
  // },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
