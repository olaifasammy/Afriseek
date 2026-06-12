import { AfriseekEntity } from "../../types/entity";

export interface NarrativeSection {
  title: string;
  content: string;
  entities: string[];
}

export interface NarrativeResult {
  root: string;
  title: string;
  summary: string;
  sections: NarrativeSection[];
}

export class NarrativeEngine {
  generate(
    root: AfriseekEntity,
    related: AfriseekEntity[]
  ): NarrativeResult {

    const title = `Understanding ${root.name}`;

    const summary =
      `${root.name} is a ${root.entityType} with connections across geographic, cultural, historical and modern African knowledge domains.`;

    const sections: NarrativeSection[] = [];

    const geoEntities = related.filter(e =>
      ["city", "state", "country", "region"].includes(
        e.entityType
      )
    );

    if (geoEntities.length) {
      sections.push({
        title: "Geographic Context",
        content:
          `${root.name} is geographically connected to ${geoEntities
            .slice(0, 5)
            .map(e => e.name)
            .join(", ")}.`,
        entities: geoEntities.map(e => e.id)
      });
    }

    const culturalEntities = related.filter(e =>
      ["tribe", "ethnic_group", "language", "religion", "culture"].includes(
        e.entityType
      )
    );

    if (culturalEntities.length) {
      sections.push({
        title: "Cultural Identity",
        content:
          `${root.name} is culturally linked with ${culturalEntities
            .slice(0, 5)
            .map(e => e.name)
            .join(", ")}.`,
        entities: culturalEntities.map(e => e.id)
      });
    }

    const historicalEntities = related.filter(e =>
      ["kingdom", "empire", "historical_event", "dynasty"].includes(
        e.entityType
      )
    );

    if (historicalEntities.length) {
      sections.push({
        title: "Historical Background",
        content:
          `${root.name} has historical connections with ${historicalEntities
            .slice(0, 5)
            .map(e => e.name)
            .join(", ")}.`,
        entities: historicalEntities.map(e => e.id)
      });
    }

    const modernEntities = related.filter(e =>
      ["company", "infrastructure", "airport", "government"].includes(
        e.entityType
      )
    );

    if (modernEntities.length) {
      sections.push({
        title: "Modern Relevance",
        content:
          `${root.name} connects to modern structures such as ${modernEntities
            .slice(0, 5)
            .map(e => e.name)
            .join(", ")}.`,
        entities: modernEntities.map(e => e.id)
      });
    }

    return {
      root: root.id,
      title,
      summary,
      sections
    };
  }
}