import { Request, Response } from "express";
import { ontologyService } from "../modules/ontology/OntologyService";

export class OntologyController {

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    return res.json({
      success: true,
      data: ontologyService.getAll()
    });
  };

  getByType = async (
    req: Request,
    res: Response
  ) => {

    const entityType =
      String(req.params.entityType);

    const ontology =
      ontologyService.get(
        entityType
      );

    if (!ontology) {
      return res.status(404).json({
        success: false,
        message: "Ontology not found"
      });
    }

    return res.json({
      success: true,
      data: ontology
    });
  };
}
