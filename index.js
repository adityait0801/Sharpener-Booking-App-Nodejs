const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { log } = require("console");

const sequelize = require("./utils/database");

const UserController = require("./controllers/user");

var app = express();

const PORT = 8000;
let cors = require("cors");
app.use(cors());

//json middleware
app.use(express.json());

//Routes

app.get("/api/users", UserController.getUsers);

app.post("/api/users", UserController.postUser);

app.patch("/api/users/:email", UserController.patchUser);

app.delete("/api/users/:email", UserController.deleteUser);

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, function () {
      console.log("Started application on port %d", PORT);
    });
  })
  .catch((errr) => console.log(errr));