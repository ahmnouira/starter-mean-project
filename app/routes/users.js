const users = require("../controllers/users");

module.exports = (app) => {
  app
    .route("/api/users/")
    .get(users.get)
    .post(users.post)
    .put(users.put)
    .delete(users.delete);
  app
    .route("/api/users/:id")
    .get(users.get)
    .put(users.put)
    .delete(users.delete);
};
