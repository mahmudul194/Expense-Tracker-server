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
