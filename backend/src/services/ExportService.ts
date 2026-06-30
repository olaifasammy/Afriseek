export class ExportService {
  async exportToCSV(data: any): Promise<string> {
    // Simplified CSV conversion
    return JSON.stringify(data);
  }
}
