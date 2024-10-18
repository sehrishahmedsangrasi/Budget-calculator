import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionContext';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="bg-customBgGray p-6 shadow-md rounded-lg h-[610px] flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
      <ul className="space-y-2 overflow-y-auto h-full pr-4 scrollbar-hide">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex justify-between">
            <div className="border-gray-400 rounded-md shadow-md text-customTextGray bg-white border-1 w-full p-4">
              <span className="flex justify-between">
                <span className="font-semibold">{transaction.category}</span>
                <span className="inline-flex items-center space-x-2">
                  <span
                    className={`font-semibold text-sm rounded-xl p-[4px] ${
                      transaction.type === 'Income'
                        ? 'text-customGrassGreen bg-customLightGreen'
                        : 'text-customRed bg-customDullRed'
                    }`}
                  >
                    {transaction.type}
                  </span>
                  <img
                    src="/icons/delete.png"
                    alt="Delete"
                    className="w-[16px] h-[16px] cursor-pointer"
                    onClick={() => deleteTransaction(index)} // Call deleteTransaction with the index
                  />
                </span>
              </span>
              <span className="text-black font-bold text-xl pb-2 inline-block">
                ${transaction.amount}
              </span>
              <div className="max-h-[100px] overflow-y-auto pr-2 scrollbar-hide break-words whitespace-pre-wrap">
                {transaction.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
