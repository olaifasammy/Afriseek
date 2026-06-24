import { Router } from "express";
import { StudioUserController } from "../controllers/StudioUserController";
import { validate } from "../middleware/validate";
import { CreateUserSchema, UpdateUserSchema } from "../validation/user/userSchemas";

const router = Router();
const controller = new StudioUserController();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", validate(CreateUserSchema), controller.createUser);
router.patch("/:id", validate(UpdateUserSchema), controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.post("/:id/suspend", controller.suspendUser);
router.post("/:id/activate", controller.activateUser);

export default router;
