import { AfriseekEntity } from "../../types/entity";
import { EntityOntologyValidator } from "../ontology/EntityOntologyValidator";

export class EntityValidator {
  private entityOntologyValidator = new EntityOntologyValidator();
  
  validate(entity: AfriseekEntity): void {
    this.entityOntologyValidator.validate(entity);
  }
}
