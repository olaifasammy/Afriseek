export enum JobStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface Job {
  id: string;
  type: string;
  payload: any;
  status: JobStatus;
  attempts: number;
  createdAt: string;
}
