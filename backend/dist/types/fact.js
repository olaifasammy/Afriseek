"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactConfidence = exports.FactType = void 0;
var FactType;
(function (FactType) {
    FactType["TEXT"] = "text";
    FactType["NUMBER"] = "number";
    FactType["BOOLEAN"] = "boolean";
    FactType["DATE"] = "date";
    FactType["DATE_RANGE"] = "date_range";
    FactType["PERCENTAGE"] = "percentage";
    FactType["CURRENCY"] = "currency";
    FactType["COORDINATES"] = "coordinates";
    FactType["REFERENCE"] = "reference";
    FactType["LIST"] = "list";
})(FactType || (exports.FactType = FactType = {}));
var FactConfidence;
(function (FactConfidence) {
    FactConfidence["CONFIRMED"] = "confirmed";
    FactConfidence["HIGH"] = "high";
    FactConfidence["MEDIUM"] = "medium";
    FactConfidence["LOW"] = "low";
    FactConfidence["DISPUTED"] = "disputed";
    FactConfidence["LEGENDARY"] = "legendary";
})(FactConfidence || (exports.FactConfidence = FactConfidence = {}));
