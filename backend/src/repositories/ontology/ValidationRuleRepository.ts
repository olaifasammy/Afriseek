import { ValidationRuleRecord } from "../../types/studio/ValidationRuleRecord";

export interface ValidationRuleRepository {
  getAll(): Promise<ValidationRuleRecord[]>;

  create(
    record: ValidationRuleRecord
  ): Promise<void>;

  update(
    record: ValidationRuleRecord
  ): Promise<void>;

  delete(
    id: string
  ): Promise<void>;
}
