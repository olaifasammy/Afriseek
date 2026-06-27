export enum AiTaskStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface AiTask {
  id: string;
  type: string; // e.g., 'NARRATIVE', 'DISCOVERY'
  payload: any;
  actorId: string;
}

export interface AiTaskResult {
  taskId: string;
  status: AiTaskStatus;
  result?: any;
  error?: string;
  latencyMs: number;
}
