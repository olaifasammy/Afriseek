import { Router } from "express";
import { StudioEntityDuplicateController } from "../../modules/entity/duplicate/controller";

const router = Router();

router.get("/", async (req,res) => {
return new StudioEntityDuplicateController()
.scan(req,res);
});

export default router;
