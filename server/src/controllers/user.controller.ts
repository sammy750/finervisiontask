// backend/src/controllers/user.controller.ts
import { Request, Response } from "express";
import { UserAttributes } from "../models/user.model";
import UserModel from "../models/user.model";
import sequelize from "../sequelize";
import { v4 as uuidv4 } from "uuid";

const User = UserModel(sequelize); // Initialize the User model with Sequelize


/*
CREATE USER
*/
export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, surname, phonenumber, email, dob, gender, comments } =
      req.body;

    if (
      !firstname ||
      !surname ||
      !phonenumber ||
      !email ||
      !dob ||
      !gender ||
      !comments
    ) {
      return res.status(422).json({ message: "All fields are required" });
    }

    //Create Unqiue ID to store in DB
    const userId = uuidv4();

    const userInput: UserAttributes = {
      userId,
      firstname,
      surname,
      phonenumber,
      email,
      dob,
      gender,
      comments,
    };

    const userCreated = await User.create(userInput);

    return res.status(201).json({ data: userCreated });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};


/*
GET ALL USERS
*/
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
      } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Error getting users' });
      }
}


/*
DELETE USER BY ID
*/
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
      const deleted = await User.destroy({
        where: { userId: id }, 
      });
  
      if (deleted) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Error deleting user' });
    }
  };
