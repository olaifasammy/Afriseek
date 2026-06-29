import fs from 'fs';
import path from 'path';

export function discoverRoutes(baseDir: string, basePrefix = '/api') {
  const routes: { path: string; filePath: string }[] = [];
  
  // Scans both 'routes' and 'modules' if they exist within the base directory
  const directoriesToScan = ['routes', 'modules'];
  
  const isProduction = baseDir.includes('dist');
  const extension = isProduction ? 'js' : 'ts';
  
  for (const dirName of directoriesToScan) {
    const dirPath = path.join(baseDir, dirName);
    if (fs.existsSync(dirPath)) {
        const prefix = dirName === 'modules' ? '/api' : basePrefix;
        routes.push(...scanDirectory(dirPath, prefix, extension));
    }
  }
  return routes;
}

function scanDirectory(dir: string, basePrefix = '/api', extension = 'ts'): { path: string; filePath: string }[] {
  const routes: { path: string; filePath: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const regex = new RegExp(`(Routes|routes)\\.${extension}$`);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subPrefix = entry.name === 'entity' ? 'studio' : entry.name;
      routes.push(...scanDirectory(fullPath, `${basePrefix}/${subPrefix}`, extension));
    } else if (entry.name.match(regex)) {
      // Basic heuristic for path mapping:
      let routeName = entry.name
          .replace(new RegExp(`Routes\\.${extension}$`), '')
          .replace(new RegExp(`routes\\.${extension}$`), '')
          .replace(new RegExp(`\\.${extension}$`), '');
      
      if (entry.name === `routes.${extension}`) {
        routeName = '';
      }
      
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
