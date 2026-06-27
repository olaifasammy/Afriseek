import { AiTask, AiTaskResult, AiTaskStatus } from "../types/ai";
import { NarrativeEngine } from "../core/intelligence/NarrativeEngine";
import { DiscoveryEngine } from "../core/intelligence/DiscoveryEngine";

export class AiGatewayService {
  constructor(
    private narrativeEngine: NarrativeEngine,
    private discoveryEngine: DiscoveryEngine
  ) {}

  async executeTask(task: AiTask): Promise<AiTaskResult> {
    const startTime = Date.now();
    try {
      let result: any;
      switch (task.type) {
        case 'NARRATIVE':
          // payload expected to be { root: AfriseekEntity, related: AfriseekEntity[] }
          result = await this.narrativeEngine.generate(task.payload.root, task.payload.related);
          break;
        case 'DISCOVERY':
          // payload expected to be { entity: AfriseekEntity, candidates: AfriseekEntity[] }
          result = await this.discoveryEngine.discover(task.payload.entity, task.payload.candidates);
          break;
        default:
          throw new Error(`Unknown task type: ${task.type}`);
      }
      return {
        taskId: task.id,
        status: AiTaskStatus.COMPLETED,
        result,
        latencyMs: Date.now() - startTime
      };
    } catch (error: any) {
      return {
        taskId: task.id,
        status: AiTaskStatus.FAILED,
        error: error.message,
        latencyMs: Date.now() - startTime
      };
    }
  }
}
