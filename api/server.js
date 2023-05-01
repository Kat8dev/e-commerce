import express from 'express';
import * as dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
import connectDB from './config/dbConnect.js';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', productRoutes);

app.listen(8080, () => {
  console.log('Backend server is running!');
});
