const User = require("./models/User");
const Task = require("./models/Tasks");

module.exports = function(req, res, next) {
  req.database = { User, Task };
  next();
};
