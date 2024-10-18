import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TransactionContext = createContext();

// Define the provider component
export const TransactionProvider = ({ children }) => {
  // Load transactions from local storage or initialize as an empty array
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  
  // State for income and expense
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Define income and expense categories
  const categories = {
    income: {
      Salary: 0,
      Business: 0,
      Investment: 0,
    },
    expense: {
      Rent: 0,
      Groceries: 0,
      Utilities: 0,
      Entertainment: 0,
    },
  };

  // State for breakdowns
  const [incomeBreakdown, setIncomeBreakdown] = useState(categories.income);
  const [expenseBreakdown, setExpenseBreakdown] = useState(categories.expense);

  // Recalculate income, expense, and breakdowns whenever transactions change
  useEffect(() => {
    const newIncome = transactions
      .filter((transaction) => transaction.type === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    const newExpense = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    // Update income and expense state
    setIncome(newIncome);
    setExpense(newExpense);

    // Recalculate breakdowns for income and expense categories
    const newIncomeBreakdown = { ...categories.income };
    const newExpenseBreakdown = { ...categories.expense };

    transactions.forEach((transaction) => {
      if (transaction.type === 'Income') {
        newIncomeBreakdown[transaction.category] += transaction.amount;
      } else {
        newExpenseBreakdown[transaction.category] += transaction.amount;
      }
    });

    // Update state with new breakdowns
    setIncomeBreakdown(newIncomeBreakdown);
    setExpenseBreakdown(newExpenseBreakdown);

    // Update local storage with new transactions
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    if (transaction.amount <= 0) {
      alert("Transaction amount must be greater than zero.");
      return; // Exit if invalid
    }

    // Add the new transaction to the state
    setTransactions((prev) => [...prev, transaction]);
  };

  // Function to delete a transaction
  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        income,
        expense,
        incomeBreakdown,
        expenseBreakdown,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

