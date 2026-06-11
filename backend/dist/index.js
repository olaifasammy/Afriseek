"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const entityRoutes_1 = __importDefault(require("./routes/entityRoutes"));
const graphRoutes_1 = __importDefault(require("./routes/graphRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (_req, res) => {
    res.json({
        status: "ok"
    });
});
app.use("/api/entities", entityRoutes_1.default);
app.use("/api/graph", graphRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Afriseek API running on port ${PORT}`);
});
