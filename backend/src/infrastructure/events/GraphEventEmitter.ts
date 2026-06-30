import { EventEmitter } from 'events';

class GraphEventEmitter extends EventEmitter {
  static GRAPH_METADATA_UPDATED = 'GRAPH_METADATA_UPDATED';
  static GRAPH_ARCHIVED = 'GRAPH_ARCHIVED';

  emitMetadataUpdated(metadata: any) {
    this.emit(GraphEventEmitter.GRAPH_METADATA_UPDATED, metadata);
  }

  emitArchived() {
    this.emit(GraphEventEmitter.GRAPH_ARCHIVED);
  }
}

export const graphEventEmitter = new GraphEventEmitter();
