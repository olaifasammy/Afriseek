import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { getDependencies } from '../config/dependencies';

const { entityRepository } = getDependencies();
import { EntityService } from '../services/EntityService';

const entityService = new EntityService(entityRepository);

/**
 * Controller for managing Entity lifecycle.
 */
export const EntityController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    await entityService.create(req.body);
    res.status(201).json({ message: 'Entity created' });
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const entity = await entityService.getById(id);
    res.json({ entity });
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    await entityService.update(req.body);
    res.json({ message: 'Entity updated' });
  }),

  delete: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await entityService.delete(id);
    res.status(204).send();
  }),
};

export default EntityController;
