import express from "express";
import {
  authUser,
  deleteUser,
  registerUser,
  updateUserProfile,
  updateUser,
  getUserById,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";


const router = express.Router();


router.route("/").post(registerUser).get(protect, admin, getUsers)
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

router

  .route("/:id")

  .delete(protect, admin, deleteUser)

  .get(protect, admin, getUserById)

  .put(protect, admin, updateUser);



export default router;
