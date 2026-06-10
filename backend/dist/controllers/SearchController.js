"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
class SearchController {
    searchService;
    constructor(searchService) {
        this.searchService = searchService;
    }
    search = async (req, res) => {
        try {
            const query = String(req.query.q || "");
            const results = await this.searchService.search(query);
            return res.json({
                success: true,
                query,
                results
            });
        }
        catch {
            return res.status(500).json({
                success: false
            });
        }
    };
}
exports.SearchController = SearchController;
