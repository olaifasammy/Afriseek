import { Source, SourceStatus } from "../../types/source";

export class CredibilityEngine {
  calculateScore(source: Source): number {
    // Basic implementation of credibility scoring
    let score = 50; 
    if (source.status === SourceStatus.VERIFIED) score += 30;
    if (source.metadata.publisher === 'Government') score += 20;
    return Math.min(score, 100);
  }
}
