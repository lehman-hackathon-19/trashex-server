var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.put("/:id", function(req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    User.findOne({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  });
});

module.exports = router;
