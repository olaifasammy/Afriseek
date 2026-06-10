"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printEntities = printEntities;
function printEntities(entities) {
    for (const entity of entities) {
        console.log(`${entity.name} (${entity.entityType})`);
    }
}
