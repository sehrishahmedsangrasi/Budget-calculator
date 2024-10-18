// src/components/Header.js
import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionContext';

const Header = () => {
  // Access income and expense from the TransactionContext
  const { income, expense } = useContext(TransactionContext);
  
  return (
    <div className="mb-5">
      <div className="bg-customGray p-6 rounded-lg shadow-md mb-5">
        <h1 className="text-lg font-semibold text-customWhite">Available Balance</h1>
        {/* Show available balance (income - expense) */}
        <p className="text-3xl font-semibold text-white">${(income - expense).toFixed(2)}</p>
      </div>
      <div className="flex justify-between gap-3">
        <div className="w-1/2 bg-customgreen p-4 rounded-lg shadow-md flex h-[115px]">
          <div className="text-left">
            <p className="h-10 w-10 flex-shrink-0 bg-customdrkgreen rounded-full flex items-center justify-center">
              <img src="/icons/bank.png" alt="Income" />
            </p>
            {/* Show total income */}
            <p className="text-black font-bold text-xl pl-1">${income.toFixed(2)}</p>
            <p className="text-md font-semibold pl-1 text-customTextGray text-custom-12px">Income</p>
          </div>
        </div>
        <div className="w-1/2 bg-customDullLavender p-4 rounded-lg shadow-md flex h-[115px]">
          <div className="text-left">
            <p className="h-10 w-10 flex-shrink-0 bg-customPurple rounded-full flex items-center justify-center">
              <img src="/icons/wallet.png" alt="Expense" />
            </p>
            {/* Show total expense */}
            <p className="text-black font-bold text-xl pl-1">${expense.toFixed(2)}</p>
            <p className="text-md font-semibold pl-1 text-customTextGray text-custom-12px">Expense</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
