const { User } = require("../models");

const userdata = [
  {
    username: "Respeknomo",
    password: "abc123",
  },
  {
    username: "BenKing",
    password: "abc111",
  },
  {
    username: "AdrienDean",
    password: "abc222",
  },
  {
    username: "LebronJames",
    password: "abc333",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
