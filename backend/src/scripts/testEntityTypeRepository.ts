import { SeedEntityTypeRepository }
from "../repositories/ontology/seed/SeedEntityTypeRepository";

async function run() {

  const repository =
    new SeedEntityTypeRepository();

  const records =
    await repository.getAll();

  console.log(
    "ENTITY_TYPES=",
    records.length
  );

  console.log(
    records
      .slice(0, 10)
      .map(
        record => record.key
      )
  );
}

run();
