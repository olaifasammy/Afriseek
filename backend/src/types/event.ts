export interface Event {

  id: string;

  slug: string;

  name: string;

  description: string;

  eventType:
    | "festival"
    | "historical"
    | "political"
    | "cultural"
    | "religious"
    | "educational";

  entityId: string;

  startDate: string;

  endDate: string;

  metadata: {

    createdAt: string;

    updatedAt: string;
  };
}
