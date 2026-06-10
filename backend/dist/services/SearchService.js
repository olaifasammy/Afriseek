"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
class SearchService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async search(query) {
        const entities = await this.repository.findAll();
        const normalized = query.toLowerCase().trim();
        return entities.filter(entity => entity.name
            .toLowerCase()
            .includes(normalized));
    }
}
exports.SearchService = SearchService;
