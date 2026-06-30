import { EventEmitter } from 'events';

class OntologyEventEmitter extends EventEmitter {
  static ONTOLOGY_CREATED = 'ONTOLOGY_CREATED';
  static ONTOLOGY_UPDATED = 'ONTOLOGY_UPDATED';
  static ONTOLOGY_PUBLISHED = 'ONTOLOGY_PUBLISHED';

  emitCreated(ontology: any) {
    this.emit(OntologyEventEmitter.ONTOLOGY_CREATED, ontology);
  }

  emitUpdated(ontology: any) {
    this.emit(OntologyEventEmitter.ONTOLOGY_UPDATED, ontology);
  }

  emitPublished(id: string) {
    this.emit(OntologyEventEmitter.ONTOLOGY_PUBLISHED, id);
  }
}

export const ontologyEventEmitter = new OntologyEventEmitter();
