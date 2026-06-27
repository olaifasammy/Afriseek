import { ApiKey } from "../../types/apiKey";

export interface ApiKeyRepository {
  findById(id: string): Promise<ApiKey | null>;
  findByOwnerId(ownerId: string): Promise<ApiKey[]>;
  create(apiKey: ApiKey): Promise<void>;
  update(apiKey: ApiKey): Promise<void>;
  delete(id: string): Promise<void>;
}
