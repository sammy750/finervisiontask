"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const sequelize_1 = __importDefault(require("../sequelize"));
const uuid_1 = require("uuid");
const User = (0, user_model_1.default)(sequelize_1.default); // Initialize the User model with Sequelize
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, surname, phonenumber, email, dob, gender, comments } = req.body;
        if (!firstname ||
            !surname ||
            !phonenumber ||
            !email ||
            !dob ||
            !gender ||
            !comments) {
            return res.status(422).json({ message: "All fields are required" });
        }
        const userId = (0, uuid_1.v4)();
        const userInput = {
            userId,
            firstname,
            surname,
            phonenumber,
            email,
            dob,
            gender,
            comments,
        };
        const userCreated = yield User.create(userInput);
        return res.status(201).json({ data: userCreated });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.findAll();
        res.json(users);
    }
    catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Error getting users' });
    }
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.controller.js.map