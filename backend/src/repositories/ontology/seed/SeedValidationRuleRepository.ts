import { ValidationRuleRepository } from "../ValidationRuleRepository";
import { ValidationRuleRecord } from "../../../types/studio/ValidationRuleRecord";

export class SeedValidationRuleRepository
  implements ValidationRuleRepository {

  private readonly records =
    new Map<string, ValidationRuleRecord>();

  async getAll():
    Promise<ValidationRuleRecord[]> {

    return [
      ...this.records.values()
    ];
  }

  async create(
    record: ValidationRuleRecord
  ): Promise<void> {

    this.records.set(
      record.id,
      record
    );
  }

  async update(
    record: ValidationRuleRecord
  ): Promise<void> {

    this.records.set(
      record.id,
      record
    );
  }

  async delete(
    id: string
  ): Promise<void> {

    this.records.delete(id);
  }
}
