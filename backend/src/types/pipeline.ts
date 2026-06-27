export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export type DataFormat = 'JSON' | 'CSV' | 'RIS' | 'BIBTEX';

export interface PipelineStage {
  name: string;
  execute: (data: any) => Promise<any>;
}
