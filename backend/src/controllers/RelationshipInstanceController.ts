import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { RelationshipService } from '../services/RelationshipService';
import { getDependencies } from '../config/dependencies';

export class RelationshipInstanceController {
  private service: RelationshipService;

  constructor() {
    this.service = getDependencies().relationshipService;
  }

  create = asyncHandler(async (req: Request, res: Response) => {
    const { sourceEntityId, targetEntityId, relationshipTypeId, strength, weight, description } = req.body;
    await this.service.create(sourceEntityId, {
      type: relationshipTypeId,
      targetId: targetEntityId,
      strength: strength,
      weight: weight,
      description: description
    });
    res.status(201).json({ message: 'Relationship instance created', sourceEntityId, targetEntityId, relationshipTypeId });
  });

  delete = asyncHandler(async (req: Request, res: Response) => {
    const sourceEntityId = req.query.sourceEntityId as string;
    const id = req.params.relationshipId as string;
    if (!sourceEntityId) {
        res.status(400).json({ success: false, message: "sourceEntityId is required" });
        return;
    }
    await this.service.delete(sourceEntityId, id);
    res.status(204).json({ message: `Relationship ${id} deleted` });
  });
}
