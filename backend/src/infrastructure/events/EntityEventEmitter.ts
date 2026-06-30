import { EventEmitter } from 'events';

class EntityEventEmitter extends EventEmitter {
  static ENTITY_CREATED = 'ENTITY_CREATED';
  static ENTITY_UPDATED = 'ENTITY_UPDATED';
  static ENTITY_DELETED = 'ENTITY_DELETED';

  emitCreated(entity: any) {
    this.emit(EntityEventEmitter.ENTITY_CREATED, entity);
  }

  emitUpdated(entity: any) {
    this.emit(EntityEventEmitter.ENTITY_UPDATED, entity);
  }

  emitDeleted(id: string) {
    this.emit(EntityEventEmitter.ENTITY_DELETED, id);
  }
}

export const entityEventEmitter = new EntityEventEmitter();
