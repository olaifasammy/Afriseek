import { Request, Response } from "express";
import { randomUUID } from "crypto";

import { getDependencies } from "../config/dependencies";
import { OntologyDefinitionService } from "../services/OntologyDefinitionService";

export class StudioOntologyDefinitionController {

  private service =
    new OntologyDefinitionService(
      getDependencies()
        .ontologyDefinitionRepository
    );

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: await this.service.getAll()
    });
  };

  getByEntityType = async (
    req: Request,
    res: Response
  ) => {

    const record =
      await this.service.getByEntityType(
        String(req.params.entityType)
      );

    if (!record) {

      return res.status(404).json({
        success: false,
        message: "Ontology not found"
      });
    }

    return res.json({
      success: true,
      data: record
    });
  };

  create = async (
    req: Request,
    res: Response
  ) => {

    const now =
      new Date().toISOString();

    await this.service.create({
      id: randomUUID(),
      version: 1,
      active: true,
      createdAt: now,
      updatedAt: now,
      ...req.body
    });

    return res.status(201).json({
      success: true
    });
  };

  update = async (
    req: Request,
    res: Response
  ) => {

    await this.service.update({
      ...req.body,
      updatedAt:
        new Date().toISOString()
    });

    return res.json({
      success: true
    });
  };

  delete = async (
    req: Request,
    res: Response
  ) => {

    await this.service.delete(
      String(req.params.id)
    );

    return res.json({
      success: true
    });
  };
}
