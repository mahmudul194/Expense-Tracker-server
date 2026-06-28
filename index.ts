import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || '';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true }
});


expenseSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  }
});

const Expense = mongoose.model('Expense', expenseSchema);



// 1. Get all expenses
app.get('/api/expenses', async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses." });
  }
});

// 2. Add a new expense
app.post('/api/expenses', async (req: Request, res: Response) => {
  try {
    const { title, amount, category, date } = req.body;
    
    if (!title || !amount || !category || !date) {
      return res.status(400).json({ error: "Please provide title, amount, category, and date." });
    }

    const newExpense = await Expense.create({
      title,
      amount: Number(amount),
      category,
      date
    });
    
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: "Failed to create expense." });
  }
});

// 3. Update an expense
app.put('/api/expenses/:id', async (req: Request, res: Response) => {
  try {
    const idToFind = req.params.id;
    
    const updatedExpense = await Expense.findByIdAndUpdate(
      idToFind,
      req.body,
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ error: "We could not find that expense." });
    }

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: "Failed to update expense." });
  }
});

// 4. Delete an expense
app.delete('/api/expenses/:id', async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;
    
    const deletedExpense = await Expense.findByIdAndDelete(idToDelete);

    if (!deletedExpense) {
      return res.status(404).json({ error: "We could not find that expense to delete." });
    }

    res.json({ message: "Expense deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete expense." });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
