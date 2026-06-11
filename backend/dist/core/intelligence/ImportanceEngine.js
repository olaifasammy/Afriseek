"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportanceEngine = void 0;
const importance_1 = require("../../types/importance");
class ImportanceEngine {
    score(importance) {
        switch (importance) {
            case importance_1.EntityImportance.GLOBAL:
                return 300;
            case importance_1.EntityImportance.CONTINENTAL:
                return 200;
            case importance_1.EntityImportance.NATIONAL:
                return 120;
            case importance_1.EntityImportance.REGIONAL:
                return 80;
            case importance_1.EntityImportance.LOCAL:
                return 40;
            default:
                return 10;
        }
    }
}
exports.ImportanceEngine = ImportanceEngine;
