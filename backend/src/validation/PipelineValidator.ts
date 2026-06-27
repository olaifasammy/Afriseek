import { ValidationResult } from "../types/pipeline";

export class PipelineValidator {
  async validate(data: any): Promise<ValidationResult> {
    const errors: string[] = [];
    
    // Simple schema validation example
    if (!data.id) errors.push("Missing required field: id");
    if (!data.type) errors.push("Missing required field: type");
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
