import { Router } from "express";
import { StudioEntityBulkOperationController } from "../../controllers/entity/StudioEntityBulkOperationController";

const router = Router();

router.post("/verify", async (req,res) => {
return new StudioEntityBulkOperationController()
.verify(req,res);
});

export default router;
