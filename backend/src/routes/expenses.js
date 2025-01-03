import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

// Get all expenses for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const expenses = await Expense.find({ userId })
      .sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    console.error('Fetch expenses error:', error);
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

// Create a new expense
router.post('/', async (req, res) => {
  try {
    const { userId, category, description, amount, date } = req.body;
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const expense = new Expense({
      userId,
      category,
      description,
      amount,
      date
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    console.error('Create expense error:', error);
    res.status(500).json({ message: 'Error creating expense' });
  }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      userId
    });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Delete expense error:', error);
    res.status(500).json({ message: 'Error deleting expense' });
  }
});

export default router;