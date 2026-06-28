import { getDependencies, initializeDependencies } from "../config/dependencies";
import { africaEntities } from "../data/seeds/africa";
import { libyaEntities } from "../data/seeds/libya";

async function migrate() {
    await initializeDependencies();
    const { entityRepository } = getDependencies();

    const allEntities = [...africaEntities, ...libyaEntities];

    for (const entity of allEntities) {
        console.log(`Migrating ${entity.name}...`);
        try {
            await entityRepository.create(entity);
            console.log(`Successfully migrated ${entity.name}`);
        } catch (error) {
            console.error(`Failed to migrate ${entity.name}:`, error);
        }
    }
}

migrate().then(() => {
    console.log("Migration complete");
    process.exit(0);
}).catch(err => {
    console.error("Migration failed:", err);
    process.exit(1);
});
