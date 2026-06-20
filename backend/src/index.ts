import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import { initializeDependencies } from "./config/dependencies";
import { ontologyService } from "./modules/ontology/OntologyService";

import entityRoutes from "./routes/entityRoutes";
import graphRoutes from "./routes/graphRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import auditRoutes from "./routes/auditRoutes";
import settingsRoutes from "./routes/settingsRoutes";
import articleRoutes from "./routes/articleRoutes";
import searchRoutes from "./routes/searchRoutes";
import contextRoutes from "./routes/contextRoutes";
import eventRoutes from "./routes/eventRoutes";
import ontologyRoutes from "./routes/ontologyRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import timelineRoutes from "./routes/timelineRoutes";
import relationshipRoutes from "./routes/relationshipRoutes";
import studioRelationshipRoutes from "./routes/studioRelationshipRoutes";
import studioValidationRuleRoutes from "./routes/studioValidationRuleRoutes";
import studioOntologyAuditRoutes from "./routes/studioOntologyAuditRoutes";
import studioOntologyDefinitionRoutes from "./routes/studioOntologyDefinitionRoutes";
import studioOntologyTestingRoutes from "./routes/studioOntologyTestingRoutes";
import studioRequiredRelationshipRoutes from "./routes/studioRequiredRelationshipRoutes";
import studioInverseRelationshipRoutes from "./routes/studioInverseRelationshipRoutes";
import studioOntologyVersioningRoutes from "./routes/studioOntologyVersioningRoutes";
import studioGraphIntegrityRoutes from "./routes/studioGraphIntegrityRoutes";
import studioOrphanEntityRoutes from "./routes/studioOrphanEntityRoutes";
import studioBrokenLinkRoutes from "./routes/studioBrokenLinkRoutes";
import studioDuplicateNodeRoutes from "./routes/studioDuplicateNodeRoutes";
import studioGraphMetricsRoutes from "./routes/studioGraphMetricsRoutes";
import studioMetadataDefinitionRoutes from "./routes/studioMetadataDefinitionRoutes";
import studioEntityDashboardRoutes from "./routes/studioEntityDashboardRoutes";
import studioEntityVerificationRoutes from "./routes/studioEntityVerificationRoutes";
import studioEntityMergeRoutes from "./routes/studioEntityMergeRoutes";
import studioEntitySplitRoutes from "./routes/studioEntitySplitRoutes";
import studioEntitySourceRoutes from "./routes/studioEntitySourceRoutes";
import studioEntityFactRoutes
from "./routes/studioEntityFactRoutes";
import studioRequiredFieldRoutes from "./routes/studioRequiredFieldRoutes";
import studioUserRoutes from "./routes/studioUserRoutes";
import studioRoleRoutes from "./routes/studioRoleRoutes";
import studioPermissionRoutes from "./routes/studioPermissionRoutes";
import studioInvitationRoutes from "./routes/studioInvitationRoutes";
import studioGraphExplorerRoutes from "./routes/studioGraphExplorerRoutes";
import studioGraphPathRoutes from "./routes/studioGraphPathRoutes";

import studioEntityQualityRoutes from "./routes/entity/studioEntityQualityRoutes";
import studioEntityIntegrityRoutes from "./routes/entity/studioEntityIntegrityRoutes";
import studioEntitySearchRoutes from "./routes/entity/studioEntitySearchRoutes";
import studioEntityAuditRoutes from "./routes/audit/studioEntityAuditRoutes";
import studioEntityArticleLinkRoutes from "./routes/studioEntityArticleLinkRoutes";
import studioEntityMediaRoutes from "./routes/studioEntityMediaRoutes";
import studioEntityTraitRoutes from "./routes/studioEntityTraitRoutes";
import studioArticleRoutes from "./routes/article/studioArticleRoutes";
import studioArticlePublicationRoutes from "./routes/article/studioArticlePublicationRoutes";
import studioArticleRevisionRoutes from "./routes/article/studioArticleRevisionRoutes";
import studioArticleCitationRoutes from "./routes/article/studioArticleCitationRoutes";
import { errorHandler } from "./middleware/errorHandler";


import studioEntityHistoryRoutes from "./routes/studioEntityHistoryRoutes";
import studioEntityVersioningRoutes from "./routes/studioEntityVersioningRoutes";

import studioEntityBulkOperationRoutes from "./routes/entity/studioEntityBulkOperationRoutes";
import studioEntityDuplicateRoutes from "./routes/entity/studioEntityDuplicateRoutes";
import studioEntityTimelineRoutes from "./routes/entity/studioEntityTimelineRoutes";


async function bootstrap() {
  const app = express();

  app.use(helmet());
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  try {
    initializeDependencies();
    await ontologyService.load();

    console.log("⚡ Afriseek Engine ready");
  } catch (error) {
    console.error("❌ Fatal bootstrap error:", error);
    process.exit(1);
  }

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/entities", entityRoutes);
  app.use("/api/graph", graphRoutes);
  app.use("/api/relationships", relationshipRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/audit", auditRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/timeline", timelineRoutes);
  app.use("/api/settings", settingsRoutes);
  app.use("/api/articles", articleRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/context", contextRoutes);
  app.use("/api/events", eventRoutes);
  app.use("/api/ontology", ontologyRoutes);

  app.use("/api/studio/relationships", studioRelationshipRoutes);
  app.use("/api/studio/validation-rules", studioValidationRuleRoutes);
  app.use("/api/studio/ontology-definitions", studioOntologyDefinitionRoutes);
  app.use("/api/studio/ontology-audit", studioOntologyAuditRoutes);
  app.use("/api/studio/ontology-testing", studioOntologyTestingRoutes);
  app.use("/api/studio/required-relationships", studioRequiredRelationshipRoutes);
  app.use("/api/studio/inverse-relationships", studioInverseRelationshipRoutes);
  app.use("/api/studio/ontology-versioning", studioOntologyVersioningRoutes);
  app.use("/api/studio/graph-integrity", studioGraphIntegrityRoutes);
  app.use("/api/studio/orphan-entities", studioOrphanEntityRoutes);
  app.use("/api/studio/broken-links", studioBrokenLinkRoutes);
  app.use("/api/studio/duplicate-nodes", studioDuplicateNodeRoutes);
  app.use("/api/studio/graph-metrics", studioGraphMetricsRoutes);
  app.use("/api/studio/metadata-definitions", studioMetadataDefinitionRoutes);
  app.use("/api/studio/entity-dashboard", studioEntityDashboardRoutes);
  app.use("/api/studio/entity-verification", studioEntityVerificationRoutes);
  app.use("/api/studio/entity-articles", studioEntityArticleLinkRoutes);
  app.use("/api/studio/entity-media", studioEntityMediaRoutes);
  app.use("/api/studio/entity-traits", studioEntityTraitRoutes);
  app.use("/api/studio/entity-merge", studioEntityMergeRoutes);
  app.use("/api/studio/entity-split", studioEntitySplitRoutes);
  app.use("/api/studio/entity-sources", studioEntitySourceRoutes);
  app.use("/api/studio/entity-facts", studioEntityFactRoutes);

  app.use("/api/studio/articles", studioArticleRoutes);
  app.use("/api/studio/article-publication", studioArticlePublicationRoutes);
  app.use("/api/studio/article-revisions", studioArticleRevisionRoutes);
  app.use("/api/studio/article-citations", studioArticleCitationRoutes);
  app.use("/api/studio/entity-quality", studioEntityQualityRoutes);
  app.use("/api/studio/entity-integrity", studioEntityIntegrityRoutes);
  app.use("/api/studio/entity-search", studioEntitySearchRoutes);
  app.use("/api/studio/entity-audit", studioEntityAuditRoutes);

  app.use("/api/studio/users", studioUserRoutes);
  app.use("/api/studio/roles", studioRoleRoutes);
  app.use("/api/studio/permissions", studioPermissionRoutes);
  app.use("/api/studio/invitations", studioInvitationRoutes);
  app.use("/api/studio/graph-explorer", studioGraphExplorerRoutes);
  app.use("/api/studio/graph-path", studioGraphPathRoutes);
  app.use("/api/studio/required-fields", studioRequiredFieldRoutes);

  app.use(
  "/api/studio/entity-history",
  studioEntityHistoryRoutes
);

app.use(
  "/api/studio/entity-versioning",
  studioEntityVersioningRoutes
);

app.use(
  "/api/studio/entity-bulk",
  studioEntityBulkOperationRoutes
);

app.use(
  "/api/studio/entity-duplicates",
  studioEntityDuplicateRoutes
);

app.use(
  "/api/studio/entity-timeline",
  studioEntityTimelineRoutes
);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Fatal crash:", err);
});