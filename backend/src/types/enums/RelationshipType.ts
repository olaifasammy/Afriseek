export enum RelationshipType {

  // =====================
  // Geography
  // =====================

  LOCATED_IN = "located_in",
  CONTAINS = "contains",
  PART_OF = "part_of",

  NEIGHBOR_OF = "neighbor_of",
  BORDERS = "borders",

  CAPITAL_OF = "capital_of",
  HAS_CAPITAL = "has_capital",

  FLOWS_THROUGH = "flows_through",
  ORIGINATES_IN = "originates_in",
  ENDS_IN = "ends_in",

  NEAR = "near",
  CROSSES = "crosses",

  CONNECTED_TO = "connected_to",

  // =====================
  // Governance
  // =====================

  RULED_BY = "ruled_by",
  RULED = "ruled",

  GOVERNED_BY = "governed_by",

  HAS_RULER = "has_ruler",
  HAS_GOVERNOR = "has_governor",
  HAS_PRESIDENT = "has_president",

  ADMINISTERS = "administers",

  MEMBER_OF = "member_of",

  // =====================
  // Family & Lineage
  // =====================

  PARENT_OF = "parent_of",
  CHILD_OF = "child_of",

  ANCESTOR_OF = "ancestor_of",
  DESCENDANT_OF = "descendant_of",

  SPOUSE_OF = "spouse_of",

  SUCCEEDED = "succeeded",
  SUCCEEDED_BY = "succeeded_by",

  PRECEDED = "preceded",
  PRECEDED_BY = "preceded_by",

  // =====================
  // Foundation
  // =====================

  FOUNDED = "founded",
  FOUNDED_BY = "founded_by",

  CREATED = "created",
  CREATED_BY = "created_by",

  BUILT = "built",
  BUILT_BY = "built_by",

  DISCOVERED_BY = "discovered_by",

  // =====================
  // Culture
  // =====================

  SPEAKS = "speaks",
  SPOKEN_BY = "spoken_by",

  PRACTICES = "practices",
  PRACTICED_BY = "practiced_by",

  WORSHIPS = "worships",
  WORSHIPPED_BY = "worshipped_by",

  CELEBRATES = "celebrates",

  BELONGS_TO_CULTURE = "belongs_to_culture",
  BELONGS_TO_ETHNIC_GROUP = "belongs_to_ethnic_group",

  ASSOCIATED_WITH = "associated_with",

  // =====================
  // Historical
  // =====================

  PARTICIPATED_IN = "participated_in",

  OCCURRED_IN = "occurred_in",

  FOUGHT_IN = "fought_in",

  LED = "led",

  INFLUENCED = "influenced",
  INFLUENCED_BY = "influenced_by",

  INSPIRED = "inspired",
  INSPIRED_BY = "inspired_by",

  // =====================
  // Economy
  // =====================

  TRADES_WITH = "trades_with",

  IMPORTS = "imports",
  EXPORTS = "exports",

  PRODUCES = "produces",
  CONSUMES = "consumes",

  USES_CURRENCY = "uses_currency",

  // =====================
  // Infrastructure
  // =====================

  CONNECTS_TO = "connects_to",

  PASSES_THROUGH = "passes_through",

  SERVES = "serves",

  // =====================
  // Arts & Media
  // =====================

  AUTHORED_BY = "authored_by",

  COMPOSED_BY = "composed_by",

  PERFORMED_BY = "performed_by",

  DEPICTS = "depicts",

  FEATURES = "features",

  // =====================
  // Knowledge
  // =====================

  MENTIONED_IN = "mentioned_in",

  REFERENCES = "references",

  DOCUMENTED_IN = "documented_in",

  SOURCED_FROM = "sourced_from",

  SOURCE_FOR = "source_for",

  // =====================
  // Nature
  // =====================

  NATIVE_TO = "native_to",

  PROTECTED_BY = "protected_by",

  ENDANGERED_BY = "endangered_by",

  // =====================
  // Discovery
  // =====================

  RELATED_TO = "related_to"
}
