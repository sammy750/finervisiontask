"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/user.route.ts
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// Create a new user
router.post('/users', user_controller_1.createUser);
router.get('/users', user_controller_1.getAllUsers);
// Implement other routes as needed
exports.default = router;
//# sourceMappingURL=user.route.js.map