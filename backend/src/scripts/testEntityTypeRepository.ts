import { SeedEntityTypeRepository }
from "../repositories/ontology/seed/SeedEntityTypeRepository";
import { logger } from "../config/logger";

async function run() {

  const repository =
    new SeedEntityTypeRepository();

  const records =
    await repository.getAll();

  logger.info(
    { count: records.length },
    "ENTITY_TYPES="
  );

  logger.info(
    records
      .slice(0, 10)
      .map(
        record => record.key
      ),
    "ENTITY_TYPE_KEYS="
  );
}

run();
