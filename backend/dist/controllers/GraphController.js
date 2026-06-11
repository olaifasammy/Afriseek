"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphController = void 0;
class GraphController {
    graphEngine;
    entityService;
    constructor(graphEngine, entityService) {
        this.graphEngine = graphEngine;
        this.entityService = entityService;
    }
    getGraph = async (req, res) => {
        try {
            const slug = String(req.params.slug);
            const entity = await this.entityService.getBySlug(slug);
            if (!entity) {
                return res.status(404).json({
                    success: false,
                    message: "Entity not found"
                });
            }
            const related = await this.graphEngine.deepDive(entity.id, 2);
            const response = {
                entity: {
                    id: entity.id,
                    name: entity.name,
                    type: entity.entityType
                },
                related: related.filter(item => item.entity.id !== entity.id).map(item => ({
                    name: item.entity.name,
                    type: item.entity.entityType,
                    score: item.score,
                    reasoning: item.explanation?.breakdown ?? []
                }))
            };
            return res.json({
                success: true,
                data: response
            });
        }
        catch {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };
}
exports.GraphController = GraphController;
