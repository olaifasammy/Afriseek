"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipType = void 0;
var RelationshipType;
(function (RelationshipType) {
    // =====================
    // Geography
    // =====================
    RelationshipType["LOCATED_IN"] = "located_in";
    RelationshipType["CONTAINS"] = "contains";
    RelationshipType["PART_OF"] = "part_of";
    RelationshipType["NEIGHBOR_OF"] = "neighbor_of";
    RelationshipType["BORDERS"] = "borders";
    RelationshipType["CAPITAL_OF"] = "capital_of";
    RelationshipType["HAS_CAPITAL"] = "has_capital";
    RelationshipType["FLOWS_THROUGH"] = "flows_through";
    RelationshipType["ORIGINATES_IN"] = "originates_in";
    RelationshipType["ENDS_IN"] = "ends_in";
    RelationshipType["NEAR"] = "near";
    RelationshipType["CROSSES"] = "crosses";
    RelationshipType["CONNECTED_TO"] = "connected_to";
    // =====================
    // Governance
    // =====================
    RelationshipType["RULED_BY"] = "ruled_by";
    RelationshipType["RULED"] = "ruled";
    RelationshipType["GOVERNED_BY"] = "governed_by";
    RelationshipType["HAS_RULER"] = "has_ruler";
    RelationshipType["HAS_GOVERNOR"] = "has_governor";
    RelationshipType["HAS_PRESIDENT"] = "has_president";
    RelationshipType["ADMINISTERS"] = "administers";
    RelationshipType["MEMBER_OF"] = "member_of";
    // =====================
    // Family & Lineage
    // =====================
    RelationshipType["PARENT_OF"] = "parent_of";
    RelationshipType["CHILD_OF"] = "child_of";
    RelationshipType["ANCESTOR_OF"] = "ancestor_of";
    RelationshipType["DESCENDANT_OF"] = "descendant_of";
    RelationshipType["SPOUSE_OF"] = "spouse_of";
    RelationshipType["SUCCEEDED"] = "succeeded";
    RelationshipType["SUCCEEDED_BY"] = "succeeded_by";
    RelationshipType["PRECEDED"] = "preceded";
    RelationshipType["PRECEDED_BY"] = "preceded_by";
    // =====================
    // Foundation
    // =====================
    RelationshipType["FOUNDED"] = "founded";
    RelationshipType["FOUNDED_BY"] = "founded_by";
    RelationshipType["CREATED"] = "created";
    RelationshipType["CREATED_BY"] = "created_by";
    RelationshipType["BUILT"] = "built";
    RelationshipType["BUILT_BY"] = "built_by";
    RelationshipType["DISCOVERED_BY"] = "discovered_by";
    // =====================
    // Culture
    // =====================
    RelationshipType["SPEAKS"] = "speaks";
    RelationshipType["SPOKEN_BY"] = "spoken_by";
    RelationshipType["PRACTICES"] = "practices";
    RelationshipType["PRACTICED_BY"] = "practiced_by";
    RelationshipType["WORSHIPS"] = "worships";
    RelationshipType["WORSHIPPED_BY"] = "worshipped_by";
    RelationshipType["CELEBRATES"] = "celebrates";
    RelationshipType["BELONGS_TO_CULTURE"] = "belongs_to_culture";
    RelationshipType["BELONGS_TO_ETHNIC_GROUP"] = "belongs_to_ethnic_group";
    RelationshipType["ASSOCIATED_WITH"] = "associated_with";
    // =====================
    // Historical
    // =====================
    RelationshipType["PARTICIPATED_IN"] = "participated_in";
    RelationshipType["OCCURRED_IN"] = "occurred_in";
    RelationshipType["FOUGHT_IN"] = "fought_in";
    RelationshipType["LED"] = "led";
    RelationshipType["INFLUENCED"] = "influenced";
    RelationshipType["INFLUENCED_BY"] = "influenced_by";
    RelationshipType["INSPIRED"] = "inspired";
    RelationshipType["INSPIRED_BY"] = "inspired_by";
    // =====================
    // Economy
    // =====================
    RelationshipType["TRADES_WITH"] = "trades_with";
    RelationshipType["IMPORTS"] = "imports";
    RelationshipType["EXPORTS"] = "exports";
    RelationshipType["PRODUCES"] = "produces";
    RelationshipType["CONSUMES"] = "consumes";
    RelationshipType["USES_CURRENCY"] = "uses_currency";
    // =====================
    // Infrastructure
    // =====================
    RelationshipType["CONNECTS_TO"] = "connects_to";
    RelationshipType["PASSES_THROUGH"] = "passes_through";
    RelationshipType["SERVES"] = "serves";
    // =====================
    // Arts & Media
    // =====================
    RelationshipType["AUTHORED_BY"] = "authored_by";
    RelationshipType["COMPOSED_BY"] = "composed_by";
    RelationshipType["PERFORMED_BY"] = "performed_by";
    RelationshipType["DEPICTS"] = "depicts";
    RelationshipType["FEATURES"] = "features";
    // =====================
    // Knowledge
    // =====================
    RelationshipType["MENTIONED_IN"] = "mentioned_in";
    RelationshipType["REFERENCES"] = "references";
    RelationshipType["DOCUMENTED_IN"] = "documented_in";
    RelationshipType["SOURCED_FROM"] = "sourced_from";
    RelationshipType["SOURCE_FOR"] = "source_for";
    // =====================
    // Nature
    // =====================
    RelationshipType["NATIVE_TO"] = "native_to";
    RelationshipType["PROTECTED_BY"] = "protected_by";
    RelationshipType["ENDANGERED_BY"] = "endangered_by";
    // =====================
    // Discovery
    // =====================
    RelationshipType["RELATED_TO"] = "related_to";
})(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
