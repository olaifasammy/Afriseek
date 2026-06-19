import { Request, Response } from "express";
import { ontologyRegistry } from "../modules/ontology/OntologyRegistry";

export class StudioRequiredFieldController {

  getAll = async (
    _req: Request,
    res: Response
  ) => {

    const ontologies =
      ontologyRegistry.getAll();

    return res.json({
      success: true,
      data: ontologies.map(
        ontology => ({
          entityType: ontology.entityType,
          requiredFields:
            (ontology.metadata ?? []).filter(
              field => field.required
            )
        })
      )
    });
  };

  getByEntityType = async (
    req: Request,
    res: Response
  ) => {

    const entityType =
      String(req.params.entityType);

    const ontology =
      ontologyRegistry.get(entityType);

    if (!ontology) {

      return res.status(404).json({
        success: false,
        message: "Ontology not found"
      });
    }

    return res.json({
      success: true,
      data: {
        entityType: ontology.entityType,
        requiredFields:
          (ontology.metadata ?? []).filter(
            field => field.required
          )
      }
    });
  };
}
