export enum MediaStatus {
  DRAFT = 'DRAFT',
  VERIFIED = 'VERIFIED',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export interface MediaMetadata {
  title: string;
  description?: string;
  caption?: string;
  tags?: string[];
  keywords?: string[];
  author?: string;
  copyrightHolder?: string;
  license: string;
  language?: string;
  geoLocation?: string;
  dateCreated?: string;
  dateCaptured?: string;
}

export interface Media {
  id: string;
  type: string;
  fileName: string;
  mimeType: string;
  fileSize: number;
  ownerId: string;
  status: MediaStatus;
  metadata: MediaMetadata;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
