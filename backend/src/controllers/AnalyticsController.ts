import { Request, Response } from "express";
import { ReportingEngineService } from "../services/ReportingEngineService";
import { ExportService } from "../services/ExportService";
import { PostgreSQLAnalyticsRepository } from "../infrastructure/repositories/postgres/PostgreSQLAnalyticsRepository";

const reportingService = new ReportingEngineService(new PostgreSQLAnalyticsRepository());
const exportService = new ExportService();

export class AnalyticsController {
  static async getDashboard(_req: Request, res: Response) {
    const platform = await reportingService.generateReport('platform');
    const knowledge = await reportingService.generateReport('knowledge');
    const search = await reportingService.generateReport('search');
    res.json({ success: true, data: { platform, knowledge, search } });
  }

  static async exportReport(req: Request, res: Response) {
    const data = await reportingService.generateReport(req.params.type as string);
    const csv = await exportService.exportToCSV(data);
    res.header('Content-Type', 'text/csv');
    res.send(csv);
  }
}
