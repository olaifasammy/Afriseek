import { EntityService } from "./EntityService";

import { DiscoveryEngine }
from "../core/intelligence/DiscoveryEngine";

import { GeoContextEngine }
from "../core/intelligence/GeoContextEngine";

import { NarrativeEngine }
from "../core/intelligence/NarrativeEngine";

export class IntelligentContextService {

  constructor(
    private entities: EntityService
  ) {}

  async build(
    slug: string
  ) {

    const root =
      await this.entities.getBySlug(
        slug
      );

    if (!root) {
      return null;
    }

    const all =
      await this.entities.getAll();

    const discovery =
      new DiscoveryEngine();

    const geo =
      new GeoContextEngine();

    const narrative =
      new NarrativeEngine();

    const candidates =
      all.filter(
        e => e.id !== root.id
      );

    const discoveries =
      discovery.discover(
        root,
        candidates
      );

    const geoRelated =
      geo.sortByGeoPriority(
        root,
        [...candidates]
      ).slice(0, 20);

    const story =
      narrative.generate(
        root,
        geoRelated
      );

    return {

      root,

      discoveries:
        discoveries.slice(0, 20),

      geoContext:
        geoRelated,

      narrative:
        story
    };
  }
}
