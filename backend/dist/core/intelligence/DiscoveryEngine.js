"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryEngine = void 0;
class DiscoveryEngine {
    discover(entity) {
        return entity.relationships.map(relationship => relationship.targetId);
    }
}
exports.DiscoveryEngine = DiscoveryEngine;
