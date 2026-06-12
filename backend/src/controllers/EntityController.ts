import { Request, Response } from "express";
import { EntityService } from "../services/EntityService";

export class EntityController {
  constructor(private entityService: EntityService) {}

  getEntityBySlug = async (req: Request, res: Response) => {
    try {
      const slug = String(req.params.slug);
      const entity = await this.entityService.getBySlug(slug);

      if (!entity) {
        return res.status(404).json({ success: false, message: "Entity not found" });
      }

      return res.json({ success: true, data: entity });
    } catch (error) {
      console.error("[EntityController.getEntityBySlug] Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  getAllEntities = async (req: Request, res: Response) => {
    try {
      const entities = await this.entityService.getAll();
      return res.json({ success: true, data: entities });
    } catch (error) {
      console.error("[EntityController.getAllEntities] Error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
}