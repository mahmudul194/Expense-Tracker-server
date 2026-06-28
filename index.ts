import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
// Enable CORS and JSON parsing
app.use(express.json());
