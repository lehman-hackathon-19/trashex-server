var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", function(req, res, next) {
  User.findOne({ _id: req.params.id }).then(function(user) {
    res.send(user);
  });
});

router.put("/:id", async function(req, res, next) {
  const existing = await User.findOne({ _id: req.params.id });
  console.log(existing);
  try {
    existing.totalCount = existing.totalCount + req.body.totalCount;
    console.log(req.body);
    const existingUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    existingUser.set(existing);
    const result = await existingUser.save();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
