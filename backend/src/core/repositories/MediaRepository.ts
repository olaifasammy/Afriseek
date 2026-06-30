import { Media, MediaStatus } from "../../types/media";

export interface MediaRepository {
  findAll(): Promise<Media[]>;
  findById(id: string): Promise<Media | null>;
  create(media: Media): Promise<void>;
  update(media: Media): Promise<void>;
  delete(id: string): Promise<void>;
  findByStatus(status: MediaStatus): Promise<Media[]>;
}
