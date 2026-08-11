const express = require("express");
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const testRoute = require("./routes/test.route");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute)
app.use("/api/user", testRoute)

module.exports = app;
