import { Request, Response } from "express";
import { MediaService } from "../services/MediaService";
import { PostgreSQLMediaRepository } from "../infrastructure/repositories/postgres/PostgreSQLMediaRepository";
import { AuditService } from "../services/AuditService";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";

const mediaService = new MediaService(new PostgreSQLMediaRepository(), new AuditService(new AuditStoreRepository()));

export class MediaController {
  static async upload(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    const media = await mediaService.upload(actorId, req.body);
    res.json({ success: true, data: media });
  }

  static async list(_req: Request, res: Response) {
    const media = await mediaService.findAll();
    res.json({ success: true, data: media });
  }

  static async getById(req: Request, res: Response) {
    const media = await mediaService.findById(req.params.id as string);
    res.json({ success: true, data: media });
  }

  static async update(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    const media = await mediaService.update(actorId, req.params.id as string, req.body);
    res.json({ success: true, data: media });
  }

  static async delete(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    await mediaService.delete(actorId, req.params.id as string);
    res.json({ success: true });
  }
}
