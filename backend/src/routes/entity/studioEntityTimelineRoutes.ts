import { Router } from "express";
import { StudioEntityTimelineController } from "../../controllers/entity/StudioEntityTimelineController";

const router = Router();

router.get("/:entityId", async (req,res) => {
return new StudioEntityTimelineController()
.getLinks(req,res);
});

export default router;
