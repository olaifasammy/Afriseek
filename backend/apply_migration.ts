import { getAdminDatabase } from "./src/config/supabaseAdmin";
import fs from "fs";
import path from "path";

async function runMigration() {
  const db = getAdminDatabase();
  const sql = fs.readFileSync(path.join(__dirname, "migrations/03_ontology_tables.sql"), "utf8");

  const { error } = await db.rpc("exec_sql", { sql_query: sql });

  if (error) {
    console.error("Migration failed:", error);
    // Fallback: If rpc fails, try raw query if admin client supports it
    // Actually, supabase JS client usually does not allow raw SQL without RPC.
    // I need to make sure 'exec_sql' exists or use a different method.
  } else {
    console.log("Migration applied successfully");
  }
}

runMigration();
