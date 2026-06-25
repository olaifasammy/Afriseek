import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, ".env") });

import { getAdminDatabase } from "./src/config/supabaseAdmin";
import fs from "fs";

async function runMigration() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: ts-node apply_migration.ts <migration_file_path>");
    process.exit(1);
  }

  const migrationFilePath = args[0];
  if (!fs.existsSync(migrationFilePath)) {
    console.error(`File not found: ${migrationFilePath}`);
    process.exit(1);
  }

  const db = getAdminDatabase();
  const sql = fs.readFileSync(migrationFilePath, "utf8");

  // Assuming 'exec_sql' RPC is set up in Supabase
  const { error } = await (db as any).rpc("exec_sql", { sql_query: sql });

  if (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } else {
    console.log(`Migration ${migrationFilePath} applied successfully`);
  }
}

runMigration();
