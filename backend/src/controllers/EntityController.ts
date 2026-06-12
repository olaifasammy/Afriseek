import crypto from "crypto";

import { Request, Response } from "express";

import { EntityService }
from "../services/EntityService";

import { createAuditService }
from "../bootstrap/createAuditService";

export class EntityController {

private audit =
createAuditService();

constructor(
private entityService: EntityService
) {}

getEntityBySlug = async (
req: Request,
res: Response
) => {

try {

  const slug =
    String(req.params.slug);

  const entity =
    await this.entityService.getBySlug(
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

  console.error(error);

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

  const entities =
    await this.entityService.getAll();

  return res.json({
    success: true,
    data: entities
  });

} catch (error) {

  console.error(error);

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

  await this.entityService.create(
    req.body
  );

  await this.audit.log({
    id:
      crypto.randomUUID(),
    actorId:
      String(
        req.headers[
          "x-user-id"
        ] || "unknown"
      ),
    action:
      "create_entity",
    targetType:
      "entity",
    targetId:
      String(
        req.body.id || "unknown"
      ),
    timestamp:
      new Date()
        .toISOString()
  });

  return res.status(201).json({
    success: true
  });

} catch (error) {

  console.error(error);

  return res.status(500).json({
    success: false,
    message:
      "Failed to create entity"
  });
}

};

updateEntity = async (
req: Request,
res: Response
) => {

try {

  await this.entityService.update(
    req.body
  );

  await this.audit.log({
    id:
      crypto.randomUUID(),
    actorId:
      String(
        req.headers[
          "x-user-id"
        ] || "unknown"
      ),
    action:
      "update_entity",
    targetType:
      "entity",
    targetId:
      String(
        req.body.id || "unknown"
      ),
    timestamp:
      new Date()
        .toISOString()
  });

  return res.json({
    success: true
  });

} catch (error) {

  console.error(error);

  return res.status(500).json({
    success: false,
    message:
      "Failed to update entity"
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

  await this.entityService.delete(
    id
  );

  await this.audit.log({
    id:
      crypto.randomUUID(),
    actorId:
      String(
        req.headers[
          "x-user-id"
        ] || "unknown"
      ),
    action:
      "delete_entity",
    targetType:
      "entity",
    targetId:
      id,
    timestamp:
      new Date()
        .toISOString()
  });

  return res.json({
    success: true
  });

} catch (error) {

  console.error(error);

  return res.status(500).json({
    success: false,
    message:
      "Failed to delete entity"
  });
}

};
}
