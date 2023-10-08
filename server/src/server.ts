import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import userRoute from './routes/user.route';
import UserModel from './models/user.model';

const app = express();
const port:number = parseInt(process.env.PORT || '2000', 10);

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: console.log,
});

UserModel(sequelize);

sequelize.sync();

app.use('/api', userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
