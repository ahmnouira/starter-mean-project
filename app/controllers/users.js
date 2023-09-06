const models = require("../models");

module.exports = {
  post: (req, res, next) => {
    const newUser = new models.User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    console.log("req.body :", req.body);
    newUser.save((err, doc) => {
      if (err) {
        return next(err);
      } else {
        res.status(200).json(doc);
      }
    });
  },

  get: (req, res, next) => {
    if (req.params.id) {
      models.User.findById(req.params.id, (err, user) => {
        if (err) {
          return next(err);
        } else {
          if (user) {
            // null ! null
            res.json({ user: user.fullName });
          } else {
            let response = {
              status: "Not Found",
              msg: "No longer User with this ID",
            };
            res.json(response);
          }
        }
      });
    } else {
      // limit : subset of 20 user
      models.User.find({}, {}, { limit: 20 }, (err, users) => {
        if (err) {
          return next(err);
        } else {
          res.status(200).json(users);
        }
      });
    }
  },

  put: (req, res, next) => {
    if (req.params.id) {
      models.User.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) {
          return next(err);
        } else {
          let response = {
            status: `OK`,
            msg: `<User : ${req.params.id}> Updated`,
          };
          res.json(response);
        }
      });
    } else {
      res.json({ message: "Update all User process is not supported !" });
    }
  },

  delete: (req, res, next) => {
    if (req.params.id) {
      models.User.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
          return next(err);
        }
        let response = {
          status: "OK",
          message: `< User :${req.params.id} > has been deleted`,
        };
        res.json(response);
      });
    } else {
      models.User.deleteMany({}, (err) => {
        if (err) {
          return next(err);
        }
        let response = {
          status: "OK",
          message: "All Users has been deleted",
        };
        res.json(response);
      });
    }
  },
};
