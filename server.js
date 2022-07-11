// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
//------------------

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("test root route");
  res.send("HOME PAGE");
});

//---------------
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
