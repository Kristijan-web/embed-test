const express = require("express");
const formRouter = require("./routes/getFormRoute");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/form", formRouter);

module.exports = app;
