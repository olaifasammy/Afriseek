"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportanceEngine = void 0;
const importance_1 = require("../../types/importance");
class ImportanceEngine {
    score(importance) {
        switch (importance) {
            case importance_1.EntityImportance.GLOBAL:
                return 100;
            case importance_1.EntityImportance.CONTINENTAL:
                return 80;
            case importance_1.EntityImportance.REGIONAL:
                return 60;
            case importance_1.EntityImportance.NATIONAL:
                return 40;
            case importance_1.EntityImportance.LOCAL:
                return 20;
            default:
                return 10;
        }
    }
}
exports.ImportanceEngine = ImportanceEngine;
