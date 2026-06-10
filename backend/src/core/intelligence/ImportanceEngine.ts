import { EntityImportance }
from "../../types/importance";

export class ImportanceEngine {

  score(
    importance?: EntityImportance
  ): number {

    switch (importance) {

      case EntityImportance.GLOBAL:
        return 100;

      case EntityImportance.CONTINENTAL:
        return 80;

      case EntityImportance.REGIONAL:
        return 60;

      case EntityImportance.NATIONAL:
        return 40;

      case EntityImportance.LOCAL:
        return 20;

      default:
        return 10;
    }
  }
}
