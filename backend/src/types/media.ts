export enum MediaStatus {
  DRAFT = 'DRAFT',
  VERIFIED = 'VERIFIED',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export interface MediaMetadata {
  title: string;
  description?: string;
  author?: string;
  copyrightHolder?: string;
  license: string; // Should reference a license type
  dateCreated?: string;
}

export interface Media {
  id: string;
  type: string; // Image, Video, etc.
  fileName: string;
  mimeType: string;
  fileSize: number;
  status: MediaStatus;
  metadata: MediaMetadata;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
