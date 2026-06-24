import fs from 'fs';
import path from 'path';

export function discoverRoutes(baseDir: string, basePrefix = '/api') {
  const routes: { path: string; filePath: string }[] = [];
  
  // Scans both 'routes' and 'modules' if they exist within the base directory
  const directoriesToScan = ['routes', 'modules'];
  
  for (const dirName of directoriesToScan) {
    const dirPath = path.join(baseDir, dirName);
    if (fs.existsSync(dirPath)) {
        routes.push(...scanDirectory(dirPath, basePrefix));
    }
  }
  return routes;
}

function scanDirectory(dir: string, basePrefix = '/api'): { path: string; filePath: string }[] {
  const routes: { path: string; filePath: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subPrefix = entry.name === 'entity' ? 'studio' : entry.name;
      routes.push(...scanDirectory(fullPath, `${basePrefix}/${subPrefix}`));
    } else if (entry.name.endsWith('Routes.ts') || (entry.name === 'routes.ts')) {
      // Basic heuristic for path mapping:
      let routeName = entry.name.replace('Routes.ts', '').replace('.ts', '');
      
      // Convert CamelCase to kebab-case
      routeName = routeName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      
      // Remove redundant 'studio-' prefix if the basePrefix already includes '/studio'
      if (basePrefix.includes('/studio') && routeName.startsWith('studio-')) {
          routeName = routeName.replace('studio-', '');
      }

      const routePath = `${basePrefix}/${routeName}`;
      routes.push({ path: routePath, filePath: fullPath });
    }
  }
  return routes;
}
