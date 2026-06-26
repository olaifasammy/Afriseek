import { discoverRoutes } from './loader';
import path from 'path';
import { logger } from '../config/logger';

// Run a dry-run discovery
const routesDir = path.join(__dirname);
logger.info('--- Starting route discovery dry-run ---');
try {
  const routes = discoverRoutes(routesDir);
  logger.info(`Discovered ${routes.length} routes:`);
  routes.forEach(r => logger.info(`Path: ${r.path} -> File: ${path.basename(r.filePath)}`));
} catch (error) {
  logger.error({ err: error }, 'Error during dry-run:');
}
logger.info('--- Finished dry-run ---');
