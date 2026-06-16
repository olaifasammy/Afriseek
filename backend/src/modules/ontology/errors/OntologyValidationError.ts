export class OntologyValidationError
extends Error {

  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "OntologyValidationError";
  }
}
