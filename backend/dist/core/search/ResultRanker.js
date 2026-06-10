"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultRanker = void 0;
class ResultRanker {
    rank(results) {
        return results.sort((a, b) => b.score - a.score);
    }
}
exports.ResultRanker = ResultRanker;
