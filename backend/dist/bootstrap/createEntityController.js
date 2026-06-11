"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityController = createEntityController;
const EntityController_1 = require("../controllers/EntityController");
const createEntityService_1 = require("./createEntityService");
function createEntityController() {
    return new EntityController_1.EntityController((0, createEntityService_1.createEntityService)());
}
