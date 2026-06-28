import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
// Enable CORS and JSON parsing
app.use(express.json());
import cors from 'cors';
app.use(cors());
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || '';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
// Create a Mongoose schema and model for our expenses
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true }
});
