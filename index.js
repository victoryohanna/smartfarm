const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db_init = require("./config/db");
const { success } = require("consola");

require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//Database configuration
db_init();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const api = require("./routes/router");
app.use("/", api);

app.listen(port, () => {
  success({ message: `App listenning on Port ${port} `, badge: true });
  // console.log(`App listenning on Port ${port} `)
});
