"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityController = void 0;
class EntityController {
    entityService;
    constructor(entityService) {
        this.entityService = entityService;
    }
    getEntityBySlug = async (req, res) => {
        try {
            const slug = String(req.params.slug);
            const entity = await this.entityService.getBySlug(slug);
            if (!entity) {
                return res.status(404).json({
                    success: false,
                    message: "Entity not found"
                });
            }
            return res.json({
                success: true,
                data: entity
            });
        }
        catch {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };
    getAllEntities = async (req, res) => {
        try {
            const entities = await this.entityService.getAll();
            return res.json({
                success: true,
                data: entities
            });
        }
        catch {
            return res.status(500).json({
                success: false
            });
        }
    };
}
exports.EntityController = EntityController;
