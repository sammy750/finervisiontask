"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/models/user.model.ts
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    const User = sequelize.define('User', {
        userId: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4, // Provide a default value (e.g., UUID v4)
        },
        firstname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phonenumber: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        dob: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        comments: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    });
    return User;
};
//# sourceMappingURL=user.model.js.map