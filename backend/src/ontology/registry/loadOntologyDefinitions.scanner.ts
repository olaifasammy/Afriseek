import fs from "fs";
import path from "path";
import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";

export function loadOntologyDefinitions(): OntologyDefinition[] {
  const root = path.resolve(process.cwd(), "src/ontology");
  const map = new Map<string, OntologyDefinition>();

  const walk = (dir: string): void => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "registry") continue;
        walk(full);
        continue;
      }

      if (!entry.name.endsWith(".ts")) continue;
      if (entry.name.includes(".helper.")) continue;
      if (entry.name.startsWith("Abstract")) continue;
      if (entry.name.endsWith(".d.ts")) continue;

      const mod = require(full);

      for (const value of Object.values(mod)) {
        if (
          value &&
          typeof value === "object" &&
          "entityType" in value
        ) {
          map.set(
            String((value as OntologyDefinition).entityType),
            value as OntologyDefinition
          );
        }
      }
    }
  };

  walk(root);

  return [...map.values()];
}
