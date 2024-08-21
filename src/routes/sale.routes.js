const Router = require('express').Router(); //solo trae el modulo "router" del express
const Sale = require("../models/sale.model");
const SalesController = require("../controller/sales.controller");

Router.get("/", SalesController.list);
Router.post("/", SalesController.create);

module.exports= Router