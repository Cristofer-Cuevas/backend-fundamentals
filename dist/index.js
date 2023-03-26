"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const heroeRoutes_1 = __importDefault(require("./routes/heroeRoutes"));
const villianRoutes_1 = __importDefault(require("./routes/villianRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(heroeRoutes_1.default);
app.use(villianRoutes_1.default);
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
