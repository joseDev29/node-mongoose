require("dotenv").config();

module.exports = {
  mongodb: {
    uri: process.env.MONGO_URI,
  },
};
