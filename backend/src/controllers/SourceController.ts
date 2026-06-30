import { Request, Response } from "express";
import { SourceService } from "../services/SourceService";
import { PostgreSQLSourceRepository } from "../infrastructure/repositories/postgres/PostgreSQLSourceRepository";
import { AuditService } from "../services/AuditService";
import { AuditStoreRepository } from "../repositories/AuditStoreRepository";

const sourceService = new SourceService(new PostgreSQLSourceRepository(), new AuditService(new AuditStoreRepository()));

export class SourceController {
  static async list(_req: Request, res: Response) {
    const sources = await sourceService.findAll();
    res.json({ success: true, data: sources });
  }

  static async getById(req: Request, res: Response) {
    const source = await sourceService.findById(req.params.id as string);
    res.json({ success: true, data: source });
  }

  static async create(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    const source = await sourceService.create(actorId, req.body);
    res.json({ success: true, data: source });
  }

  static async update(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    const source = await sourceService.update(actorId, req.params.id as string, req.body);
    res.json({ success: true, data: source });
  }

  static async delete(req: Request, res: Response) {
    const actorId = (req as any).user.id;
    await sourceService.delete(actorId, req.params.id as string);
    res.json({ success: true });
  }
}
