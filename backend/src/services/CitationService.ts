import { CitationRepository } from "../core/repositories/CitationRepository";
import { Citation } from "../types/citation";
import { AuditService } from "./AuditService";

export class CitationService {
  constructor(
    private citationRepository: CitationRepository,
    private auditService: AuditService
  ) {}

  async create(actorId: string, data: Omit<Citation, 'id' | 'createdAt'>) {
    const citation: Citation = {
      id: `cit_${Date.now()}`,
      sourceId: data.sourceId,
      entityId: data.entityId,
      factId: data.factId,
      relationshipId: data.relationshipId,
      articleId: data.articleId,
      type: data.type,
      pageNumber: data.pageNumber,
      quote: data.quote,
      context: data.context,
      confidenceScore: data.confidenceScore,
      createdAt: new Date().toISOString()
    };

    await this.citationRepository.create(citation);
    await this.auditService.log({
      id: `audit_${Date.now()}`,
      actorId,
      entityType: 'CITATION',
      entityId: citation.id,
      action: 'CREATE',
      timestamp: new Date().toISOString(),
      metadata: { new_value: citation }
    });
    return citation;
  }
}
