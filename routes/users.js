import express from "express";
import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

//    --- /users
// get all users
router.get("/", getUsers);

//add user
router.post("/", addUser);

// get one user by id
router.get("/:id", getUser);

//delete user
router.delete("/:id", deleteUser);

//update user by id
router.patch("/:id", updateUser);

export default router;
