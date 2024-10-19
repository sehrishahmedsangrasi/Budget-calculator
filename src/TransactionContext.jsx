import React, { createContext, useState, useEffect } from 'react';


export const TransactionContext = createContext();


export const TransactionProvider = ({ children }) => {
  
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  
  
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  
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

  
  const [incomeBreakdown, setIncomeBreakdown] = useState(categories.income);
  const [expenseBreakdown, setExpenseBreakdown] = useState(categories.expense);

  
  useEffect(() => {
    const newIncome = transactions
      .filter((transaction) => transaction.type === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    const newExpense = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    
    setIncome(newIncome);
    setExpense(newExpense);

    
    const newIncomeBreakdown = { ...categories.income };
    const newExpenseBreakdown = { ...categories.expense };

    transactions.forEach((transaction) => {
      if (transaction.type === 'Income') {
        newIncomeBreakdown[transaction.category] += transaction.amount;
      } else {
        newExpenseBreakdown[transaction.category] += transaction.amount;
      }
    });

    
    setIncomeBreakdown(newIncomeBreakdown);
    setExpenseBreakdown(newExpenseBreakdown);

    
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  
  const addTransaction = (transaction) => {
    if (transaction.amount <= 0) {
      alert("Transaction amount must be greater than zero.");
      return; 
    }

    
    setTransactions((prev) => [...prev, transaction]);
  };

  
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

