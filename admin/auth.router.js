const express = require("express");
const userRoute = express.Router();
const { getData, login } = require("./auth.service");

userRoute.get("/auth", getData);
userRoute.post("/auth", login);

module.exports = userRoute;