import { Router } from "express";
import {
  forgotPasswordController,
  loginUserController,
  logoutController,
  registerUserController,
  removeImageFromCloudinary,
  updateUserDetails,
  userAvatarController,
  verifyEmailController,
  verifyForgotPasswordOtp,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.post("/logout", auth, logoutController);
userRouter.post(
  "/userAvatar",
  auth,
  upload.array("avatar"),
  userAvatarController
);
userRouter.post("/deleteImage", auth, removeImageFromCloudinary);
userRouter.post("/update/:id", auth, updateUserDetails);
userRouter.post("/forgotPassword", forgotPasswordController);
userRouter.post("/verifyForgotPasswordOtp", verifyForgotPasswordOtp);

export default userRouter;
