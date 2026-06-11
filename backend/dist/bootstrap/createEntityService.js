"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityService = createEntityService;
const EntityService_1 = require("../services/EntityService");
const createEntityRepository_1 = require("./createEntityRepository");
function createEntityService() {
    return new EntityService_1.EntityService((0, createEntityRepository_1.createEntityRepository)());
}
