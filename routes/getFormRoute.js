const express = require("express");
const { getForm } = require("../controllers/formController");
const formRouter = express.Router();

formRouter.get("/", getForm);

module.exports = formRouter;
