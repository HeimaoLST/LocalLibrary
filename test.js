const express = require("express");
const router = express.Router();

// 导入控制器模块
const book_controller = require("./controllers/bookController");
const author_controller = require("./controllers/authorController");
const genre_controller = require("./controllers/genreController");
const book_instance_controller = require("./controllers/bookinstanceController");

console.log(typeof(book_controller.index));
