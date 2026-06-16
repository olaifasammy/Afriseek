export interface Entity {
  id: string;
  slug: string;
  name: string;
  entityType: string;
  importance?: string;

  summary: string;

  traits?: any[];
  facts?: any[];
  timeline?: any[];
  sources?: any[];
  relationships?: any[];

  metadata?: {
    verified?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };

  heroImage?: string;
  thumbnail?: string;
}
