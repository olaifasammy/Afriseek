import { AiTask, AiTaskResult, AiTaskStatus } from "../types/ai";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";
import { AuditService } from "./AuditService";

export class AiGatewayService {
  constructor(
    private narrativeEngine: NarrativeEngine,
    private discoveryEngine: DiscoveryEngine,
    private auditService: AuditService
  ) {}

  async executeTask(task: AiTask): Promise<AiTaskResult> {
    const startTime = Date.now();
    try {
      let result: any;
      switch (task.type) {
        case 'NARRATIVE':
          result = await this.narrativeEngine.generate(task.payload.root, task.payload.related);
          break;
        case 'DISCOVERY':
          result = await this.discoveryEngine.discover(task.payload.entity, task.payload.candidates);
          break;
        default:
          throw new Error(`Unknown task type: ${task.type}`);
      }
      
      await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId: task.actorId || 'SYSTEM',
        action: 'AI_TASK_COMPLETED',
        entityType: 'AI',
        entityId: task.id,
        timestamp: new Date().toISOString(),
        metadata: { taskType: task.type, latencyMs: Date.now() - startTime }
      });

      return {
        taskId: task.id,
        status: AiTaskStatus.COMPLETED,
        result,
        latencyMs: Date.now() - startTime
      };
    } catch (error: any) {
      await this.auditService.log({
        id: `audit_${Date.now()}`,
        actorId: task.actorId || 'SYSTEM',
        action: 'AI_TASK_FAILED',
        entityType: 'AI',
        entityId: task.id,
        timestamp: new Date().toISOString(),
        metadata: { taskType: task.type, error: error.message }
      });
      return {
        taskId: task.id,
        status: AiTaskStatus.FAILED,
        error: error.message,
        latencyMs: Date.now() - startTime
      };
    }
  }
}
