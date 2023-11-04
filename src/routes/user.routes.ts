import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController();
export const userRoutes = Router();

userRoutes.post("/user", userController.CreateUser);
userRoutes.get("/users", userController.listUsers);
