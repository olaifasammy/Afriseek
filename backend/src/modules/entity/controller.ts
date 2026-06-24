import crypto from "crypto";
import { Request, Response } from "express";

import { getDependencies } from "../../config/dependencies";
import { createAuditService } from "../../bootstrap/createAuditService";
import { EntityOntologyValidator } from "../ontology/EntityOntologyValidator";

export class EntityController {

  private audit =
    createAuditService();

  private ontologyValidator =
    new EntityOntologyValidator();

  getEntityBySlug = async (
    req: Request,
    res: Response
  ) => {

    try {

      const slug =
        String(req.params.slug);

      const {
        entityRepository
      } = getDependencies();

      const entity =
        await entityRepository.findBySlug(
          slug
        );

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

      console.error(
        "❌ Get Entity By Slug Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  getAllEntities = async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
        entityRepository
      } = getDependencies();

      const entities =
        await entityRepository.findAll();

      return res.json({
        success: true,
        data: entities
      });

    } catch (error) {

      console.error(
        "❌ Get All Entities Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  createEntity = async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
        entityRepository
      } = getDependencies();

      this.ontologyValidator.validate(
        req.body
      );

      await entityRepository.create(
        req.body
      );

      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(
          req.headers["x-user-id"]
          || "unknown"
        ),
        action: "create_entity",
        entityType: "entity",
        entityId: String(
          req.body.id
          || "unknown"
        ),
        timestamp:
          new Date().toISOString()
      });

      return res.status(201).json({
        success: true
      });

    } catch (error) {

      console.error(
        "❌ Create Entity Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create entity"
      });
    }
  };

  updateEntity = async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
        entityRepository
      } = getDependencies();

      const id = String(
        req.params.id
        || req.body.id
        || "unknown"
      );

      const entity = {
        ...req.body,
        id
      };

      this.ontologyValidator.validate(
        entity
      );

      await entityRepository.update(
        entity
      );

      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(
          req.headers["x-user-id"]
          || "unknown"
        ),
        action: "update_entity",
        entityType: "entity",
        entityId: id,
        timestamp:
          new Date().toISOString()
      });

      return res.json({
        success: true
      });

    } catch (error) {

      console.error(
        "❌ Update Entity Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update entity"
      });
    }
  };

  deleteEntity = async (
    req: Request,
    res: Response
  ) => {

    try {

      const id =
        String(req.params.id);

      const {
        entityRepository
      } = getDependencies();

      await entityRepository.delete(
        id
      );

      await this.audit.log({
        id: crypto.randomUUID(),
        actorId: String(
          req.headers["x-user-id"]
          || "unknown"
        ),
        action: "delete_entity",
        entityType: "entity",
        entityId: id,
        timestamp:
          new Date().toISOString()
      });

      return res.json({
        success: true
      });

    } catch (error) {

      console.error(
        "❌ Delete Entity Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Failed to delete entity"
      });
    }
  };
}
