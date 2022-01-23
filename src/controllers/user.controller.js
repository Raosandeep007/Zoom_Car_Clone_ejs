const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("/login", (req, res) => {
  return res.render("users/login");
});

router.get("/mobile", (req, res) => {
  return res.render("users/mobile");
});

router.get("/profile", (req, res) => {
  return res.render("users/profile");
});

//this is for storing data in db
router.post("/singup_or_login", async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.body.mobile });
    if (!user) {
      const user = await User.create(req.body);
      return res.render("users/otp", { user: [user] });
    }

    return res.render("users/singup");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

//singup_or_login
router.get("/singup_or_login", async (req, res) => {
  try {
    const user = await User.find({ mobile: req.query.mobile });
    if (user.length > 0) {
      return res.render("users/otp", { user: user });
    } else {
      return res.render("users/singup");
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
