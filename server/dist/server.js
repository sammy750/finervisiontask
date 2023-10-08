"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/server.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const user_route_1 = __importDefault(require("./routes/user.route"));
const user_model_1 = __importDefault(require("./models/user.model"));
const app = (0, express_1.default)();
const port = process.env.PORT || 2000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: console.log,
});
(0, user_model_1.default)(sequelize); // Initialize the User model with Sequelize
sequelize.sync();
app.use('/api', user_route_1.default); // Use '/api' as the base path for user-related routes
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map