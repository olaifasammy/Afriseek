import { Request, Response } from "express";
import { OntologyTestingService } from "../services/OntologyTestingService";

export class StudioOntologyTestingController {

  private service =
    new OntologyTestingService();

  run = async (
    _req: Request,
    res: Response
  ) => {

    const result =
      await this.service.run();

    return res.json({
      success: true,
      data: result
    });
  };
}
