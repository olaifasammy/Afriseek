import { EventEmitter } from 'events';

class RelationshipEventEmitter extends EventEmitter {
  static RELATIONSHIP_CREATED = 'RELATIONSHIP_CREATED';
  static RELATIONSHIP_UPDATED = 'RELATIONSHIP_UPDATED';
  static RELATIONSHIP_DELETED = 'RELATIONSHIP_DELETED';

  emitCreated(relationship: any) {
    this.emit(RelationshipEventEmitter.RELATIONSHIP_CREATED, relationship);
  }

  emitUpdated(relationship: any) {
    this.emit(RelationshipEventEmitter.RELATIONSHIP_UPDATED, relationship);
  }

  emitDeleted(id: string) {
    this.emit(RelationshipEventEmitter.RELATIONSHIP_DELETED, id);
  }
}

export const relationshipEventEmitter = new RelationshipEventEmitter();
