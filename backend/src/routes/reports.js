import express from 'express';
import auth from '../middleware/auth.js';
import Expense from '../models/Expense.js';

const router = express.Router();

router.get('/:type', auth, async (req, res) => {
  try {
    const { type } = req.params;
    let startDate;
    const now = new Date();

    if (type === 'monthly') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (type === 'yearly') {
      startDate = new Date(now.getFullYear(), 0, 1);
    } else {
      return res.status(400).json({ message: 'Invalid report type' });
    }

    const expenses = await Expense.find({
      userId: req.user.id,
      date: { $gte: startDate, $lte: now }
    }).sort({ date: -1 });

    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    res.json({
      period: type === 'monthly' ? 'Monthly' : 'Yearly',
      totalExpenses,
      expenses,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating report' });
  }
});

export default router;