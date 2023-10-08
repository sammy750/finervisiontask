import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Define the user validation schema
const userSchema = Joi.object({
  firstname: Joi.string().trim().required(),
  surname: Joi.string().trim().required(),
  phonenumber: Joi.string()
    .trim()
    .regex(/^\+?\d{1,3}\d{3,14}$/) // Standard phone number format with optional country code
    .required(),
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' , 'in'] } }) // Check for a valid email format
    .required(),
  dob: Joi.date().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  comments: Joi.string().allow(null).optional(),
}).options({ stripUnknown: true });

// User data validation middleware
export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
