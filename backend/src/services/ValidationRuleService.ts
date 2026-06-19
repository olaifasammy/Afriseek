import { ValidationRuleRepository } from "../repositories/ontology/ValidationRuleRepository";
import { ValidationRuleRecord } from "../types/studio/ValidationRuleRecord";

export class ValidationRuleService {

  constructor(
    private repository:
      ValidationRuleRepository
  ) {}

  async getAll():
    Promise<ValidationRuleRecord[]> {

    return this.repository.getAll();
  }

  async create(
    record: ValidationRuleRecord
  ): Promise<void> {

    await this.repository.create(
      record
    );
  }

  async update(
    record: ValidationRuleRecord
  ): Promise<void> {

    await this.repository.update(
      record
    );
  }

  async delete(
    id: string
  ): Promise<void> {

    await this.repository.delete(
      id
    );
  }
}
