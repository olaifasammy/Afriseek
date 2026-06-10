"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProcessor = void 0;
class QueryProcessor {
    normalize(query) {
        return query
            .trim()
            .toLowerCase();
    }
}
exports.QueryProcessor = QueryProcessor;
