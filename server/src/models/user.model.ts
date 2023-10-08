// backend/src/models/user.model.ts
import { Sequelize, DataTypes, Model } from 'sequelize';

export interface UserAttributes {
  userId: string,
  firstname: string;
  surname: string;
  phonenumber: string;
  email: string;
  dob: Date;
  gender: string;
  comments?: string | null;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export default (sequelize: Sequelize) => {
  const User = sequelize.define<UserInstance, UserAttributes>('User', {
    userId: {
      type: DataTypes.UUID, // Use UUID as the primary key type
      primaryKey: true, // Mark this field as the primary key
      defaultValue: DataTypes.UUIDV4, // Provide a default value (e.g., UUID v4)
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return User;
};
