import { AfriseekEntity } from "../../types/entity";
import { EntityType } from "../../types/enums/EntityType";

export interface ContextBuckets {

  geography: AfriseekEntity[];

  people: AfriseekEntity[];

  culture: AfriseekEntity[];

  institutions: AfriseekEntity[];

  landmarks: AfriseekEntity[];

  events: AfriseekEntity[];

  economy: AfriseekEntity[];

  infrastructure: AfriseekEntity[];

  knowledge: AfriseekEntity[];
}

export class ContextBucketEngine {

  bucket(
    entities: AfriseekEntity[]
  ): ContextBuckets {

    return {

      geography:
        entities.filter(
          e =>
            [
              EntityType.CONTINENT,
              EntityType.REGION,
              EntityType.COUNTRY,
              EntityType.STATE,
              EntityType.PROVINCE,
              EntityType.CITY,
              EntityType.TOWN,
              EntityType.VILLAGE
            ].includes(e.entityType)
        ),

      people:
        entities.filter(
          e =>
            [
              EntityType.PERSON,
              EntityType.ETHNIC_GROUP,
              EntityType.TRIBE,
              EntityType.CLAN
            ].includes(e.entityType)
        ),

      culture:
        entities.filter(
          e =>
            [
              EntityType.CULTURE,
              EntityType.LANGUAGE,
              EntityType.RELIGION,
              EntityType.FESTIVAL,
              EntityType.DANCE,
              EntityType.SONG
            ].includes(e.entityType)
        ),

      institutions:
        entities.filter(
          e =>
            [
              EntityType.UNIVERSITY,
              EntityType.SCHOOL,
              EntityType.LIBRARY,
              EntityType.RESEARCH_CENTER,
              EntityType.GOVERNMENT,
              EntityType.MINISTRY
            ].includes(e.entityType)
        ),

      landmarks:
        entities.filter(
          e =>
            [
              EntityType.LANDMARK,
              EntityType.MONUMENT,
              EntityType.PALACE,
              EntityType.ARCHAEOLOGICAL_SITE,
              EntityType.SACRED_SITE
            ].includes(e.entityType)
        ),

      events:
        entities.filter(
          e =>
            [
              EntityType.HISTORICAL_EVENT,
              EntityType.BATTLE,
              EntityType.WAR,
              EntityType.MIGRATION,
              EntityType.CORONATION,
              EntityType.ELECTION
            ].includes(e.entityType)
        ),

      economy:
        entities.filter(
          e =>
            [
              EntityType.COMPANY,
              EntityType.MARKET,
              EntityType.INDUSTRY,
              EntityType.CURRENCY,
              EntityType.COMMODITY
            ].includes(e.entityType)
        ),

      infrastructure:
        entities.filter(
          e =>
            [
              EntityType.AIRPORT,
              EntityType.SEAPORT,
              EntityType.ROAD,
              EntityType.RAILWAY,
              EntityType.BRIDGE,
              EntityType.DAM
            ].includes(e.entityType)
        ),

      knowledge:
        entities.filter(
          e =>
            [
              EntityType.BOOK,
              EntityType.DOCUMENT,
              EntityType.MANUSCRIPT
            ].includes(e.entityType)
        )
    };
  }
}
