const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  try {
    return res.render("homes/home");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/MapSearch", (req, res) => {
  try {
    return res.render("homes/MapSearch");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/location", (req, res) => {
  try {
    return res.render("homes/location");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/homepage", (req, res) => {
  try {
    return res.render("homes/homepage");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/calandermanual", (req, res) => {
  try {
    return res.render("homes/calandermanual");
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
