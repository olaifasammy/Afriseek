"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OntologyRegistry = void 0;
const EntityDefinitions_1 = require("./EntityDefinitions");
const RelationshipDefinitions_1 = require("./RelationshipDefinitions");
const TraitDefinitions_1 = require("./TraitDefinitions");
class OntologyRegistry {
    getEntities() {
        return EntityDefinitions_1.EntityDefinitions;
    }
    getRelationships() {
        return RelationshipDefinitions_1.RelationshipDefinitions;
    }
    getTraits() {
        return TraitDefinitions_1.TraitDefinitions;
    }
}
exports.OntologyRegistry = OntologyRegistry;
