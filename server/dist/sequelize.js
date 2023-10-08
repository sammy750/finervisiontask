"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // Adjust the database file path as needed
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map