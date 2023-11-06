import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { validateRequestBody } from "../middlewares/validateRequesBody";
import { schemaUser } from "../schemas/schemaUser";
import { validateUserId } from "../middlewares/validateUserId";

const userController = new UserController();
export const userRoutes = Router();

userRoutes.post(
  "/user",
  validateRequestBody(schemaUser),
  userController.CreateUser
);
userRoutes.get("/users", userController.listUsers);
userRoutes.put(
  "/user/:id",
  validateUserId,
  validateRequestBody(schemaUser),
  userController.updateUser
);
userRoutes.delete("/user/:id", validateUserId, userController.DeleteUser);
userRoutes.get("/users/search", userController.getUser);
userRoutes.get("/users/younger", userController.getYoungerToOlderUsers);
userRoutes.get("/users/older", userController.getOlderToYoungerUsers);
