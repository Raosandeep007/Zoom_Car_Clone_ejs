const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const carsController = require("./controllers/cars.controller");
const userController = require("./controllers/user.controller");
const homeController = require("./controllers/home.controller");
const hostController = require("./controllers/host.controller");

app.use("/home", homeController);
app.use("/host", hostController);
app.use("/cars", carsController);
app.use("/user", userController);
module.exports = app;
