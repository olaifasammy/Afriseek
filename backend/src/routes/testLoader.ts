import { discoverRoutes } from './loader';
import path from 'path';

// Run a dry-run discovery
const routesDir = path.join(__dirname);
console.log('--- Starting route discovery dry-run ---');
try {
  const routes = discoverRoutes(routesDir);
  console.log(`Discovered ${routes.length} routes:`);
  routes.forEach(r => console.log(`Path: ${r.path} -> File: ${path.basename(r.filePath)}`));
} catch (error) {
  console.error('Error during dry-run:', error);
}
console.log('--- Finished dry-run ---');
