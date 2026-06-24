import { Router } from "express";
import { StudioArticleController } from "./StudioArticleController";

const router = Router();
const controller = new StudioArticleController();

router.get("/",controller.list);
router.post("/",controller.create);
router.put("/:id",controller.update);
router.delete("/:id",controller.remove);

export default router;
