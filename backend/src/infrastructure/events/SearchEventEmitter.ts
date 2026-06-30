import { EventEmitter } from 'events';

class SearchEventEmitter extends EventEmitter {
  static SEARCH_PERFORMED = 'SEARCH_PERFORMED';
  static INDEX_UPDATED = 'INDEX_UPDATED';

  emitSearchPerformed(query: any) {
    this.emit(SearchEventEmitter.SEARCH_PERFORMED, query);
  }

  emitIndexUpdated(entityId: string) {
    this.emit(SearchEventEmitter.INDEX_UPDATED, entityId);
  }
}

export const searchEventEmitter = new SearchEventEmitter();
