"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResolver = void 0;
class EntityResolver {
    resolve(query, entities) {
        const normalized = query.trim().toLowerCase();
        return entities.filter(entity => {
            if (entity.name
                .toLowerCase()
                .includes(normalized)) {
                return true;
            }
            return (entity.aliases || []).some(alias => alias.name
                .toLowerCase()
                .includes(normalized));
        });
    }
}
exports.EntityResolver = EntityResolver;
