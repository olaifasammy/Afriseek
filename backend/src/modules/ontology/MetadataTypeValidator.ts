import { EntityMetadataField } from "../../types/entityMetadata";
import { MetadataValueType } from "./OntologyTypes";

export class MetadataTypeValidator {

  validate(
    field: EntityMetadataField,
    expectedType: MetadataValueType
  ): void {

    const value =
      field.value;

    switch (expectedType) {

      case MetadataValueType.STRING:
      case MetadataValueType.TEXT:

        if (
          typeof value !== "string"
        ) {
          throw new Error(
            `${field.key} must be a string.`
          );
        }

        break;

      case MetadataValueType.NUMBER:

        if (
          typeof value !== "number"
        ) {
          throw new Error(
            `${field.key} must be a number.`
          );
        }

        break;

      case MetadataValueType.BOOLEAN:

        if (
          typeof value !== "boolean"
        ) {
          throw new Error(
            `${field.key} must be a boolean.`
          );
        }

        break;

      case MetadataValueType.DATE:

        if (
          typeof value !== "string" ||
          Number.isNaN(
            Date.parse(value)
          )
        ) {
          throw new Error(
            `${field.key} must be a valid ISO date.`
          );
        }

        break;

      case MetadataValueType.DATE_RANGE:

        if (
          !Array.isArray(value) ||
          value.length !== 2
        ) {
          throw new Error(
            `${field.key} must be a date range.`
          );
        }

        break;

      case MetadataValueType.URL:

        if (
          typeof value !== "string"
        ) {
          throw new Error(
            `${field.key} must be a URL.`
          );
        }

        new URL(value);

        break;

      case MetadataValueType.EMAIL:

        if (
          typeof value !== "string" ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
          )
        ) {
          throw new Error(
            `${field.key} must be a valid email.`
          );
        }

        break;

      case MetadataValueType.COORDINATES:

        if (
          !Array.isArray(value) ||
          value.length !== 2
        ) {
          throw new Error(
            `${field.key} must be [latitude, longitude].`
          );
        }

        if (
          typeof value[0] !== "number" ||
          typeof value[1] !== "number"
        ) {
          throw new Error(
            `${field.key} coordinates must be numeric.`
          );
        }

        break;

      case MetadataValueType.LIST:

        if (
          !Array.isArray(value)
        ) {
          throw new Error(
            `${field.key} must be an array.`
          );
        }

        break;

      case MetadataValueType.ENTITY_REFERENCE:

        if (
          typeof value !== "string"
        ) {
          throw new Error(
            `${field.key} must be an entity id reference.`
          );
        }

        break;

      default:
        throw new Error(
          `Unsupported metadata type '${expectedType}'.`
        );
    }
  }
}
