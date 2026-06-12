import crypto from "crypto";
import { Request, Response } from "express";
import { getDependencies } from "../config/dependencies";
import { createAuditService } from "../bootstrap/createAuditService";

export class EntityController {
  // Retain your established audit logger instantiation
  private audit = createAuditService();

  getEntityBySlug = async (req: Request, res: Response) => {
    try {
      const slug = String(req.params.slug);
      const { entityRepository } = getDependencies();
      
      const entity = await entityRepository.findBySlug(slug);

      if (!entity) {
        return res.status(404).json({
          success: false,
          message: "Entity not found"
        });
      }

      return res.json({
        success: true,
        data: entity
      });
    } catch (error) {
      console.error("❌ Get Entity By Slug Error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  getAllEntities = async (req: Request, res: Response) => {
    try {
      const { entityRepository } = getDependencies();
      const entities = await entityRepository.findAll();

      return res.json({
        success: true,
        data: entities
      });
    } catch (error) {
      console.error("❌ Get All Entities Error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  createEntity = async (req: Request, res: Response) => {
    try {
      const { entityRepository } = getDependencies();
      await entityRepository.create(req.body);

      // Persist the administrative action tracking footprint
      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(req.headers["x-user-id"] || "unknown"),
        action: "create_entity",
        targetType: "entity",
        targetId: String(req.body.id || "unknown"),
        timestamp: new Date().toISOString()
      });

      return res.status(201).json({
        success: true
      });
    } catch (error) {
      console.error("❌ Create Entity Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to create entity"
      });
    }
  };

  updateEntity = async (req: Request, res: Response) => {
    try {
      const { entityRepository } = getDependencies();
      // Ensure the id variable is parsed cleanly or resolved against domain attributes
      const id = String(req.params.id || req.body.id || "unknown");
      // Merge the URL id into the body object to match your Repository signature
await entityRepository.update({ ...req.body, id });


      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(req.headers["x-user-id"] || "unknown"),
        action: "update_entity",
        targetType: "entity",
        targetId: id,
        timestamp: new Date().toISOString()
      });

      return res.json({
        success: true
      });
    } catch (error) {
      console.error("❌ Update Entity Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to update entity"
      });
    }
  };

  deleteEntity = async (req: Request, res: Response) => {
    try {
      const id = String(req.params.id);
      const { entityRepository } = getDependencies();
      
      await entityRepository.delete(id);

      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(req.headers["x-user-id"] || "unknown"),
        action: "delete_entity",
        targetType: "entity",
        targetId: id,
        timestamp: new Date().toISOString()
      });

      return res.json({
        success: true
      });
    } catch (error) {
      console.error("❌ Delete Entity Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to delete entity"
      });
    }
  };
}
