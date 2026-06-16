import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get("/", async (req, res) => {
  const controller = new UserController();
  return controller.getAllUsers(req, res);
});

export default router;