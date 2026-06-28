import { Queue } from "bullmq";
import { env } from "../config/env";

export const jobQueue = new Queue("platform-tasks", {
  connection: {
    host: env.REDIS_HOST,
    port: parseInt(env.REDIS_PORT, 10)
  }
});
