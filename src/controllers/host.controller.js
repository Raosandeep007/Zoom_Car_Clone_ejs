const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  try {
    return res.render("host/becomeHost");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/earning", (req, res) => {
  try {
    return res.render("host/earning");
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/earning_more_details", (req, res) => {
  try {
    return res.render("host/earning2");
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
