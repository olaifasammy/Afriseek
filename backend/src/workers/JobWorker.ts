import { Worker } from "bullmq";
import { env } from "../config/env";
import { logger } from "../config/logger";
import { AuditService } from "../services/AuditService";

export class JobWorker {
  constructor(private auditService: AuditService) {
    new Worker("platform-tasks", async (job) => {
        await this.processJob(job);
    }, {
      connection: {
        host: env.REDIS_HOST,
        port: parseInt(env.REDIS_PORT, 10)
      }
    });
  }

  private async processJob(job: any) {
    logger.info({ jobId: job.id, type: job.data.type }, "Processing job");
    
    try {
        // Job processing logic based on job.data.type
        logger.info({ jobId: job.id }, "Job completed successfully");
        await this.auditService.log({
            id: `audit_${Date.now()}`,
            actorId: 'SYSTEM',
            entityType: 'JOB',
            entityId: job.id,
            action: 'JOB_COMPLETED',
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        logger.error({ jobId: job.id, error: error.message }, "Job failed");
        throw error; // Let BullMQ handle retries
    }
  }
}
