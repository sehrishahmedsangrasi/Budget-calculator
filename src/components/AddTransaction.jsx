import { useState, useContext } from 'react';
import { TransactionContext } from '../TransactionContext'; 

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  
  const incomeCategories = ['Salary', 'Business', 'Investment'];
  const expenseCategories = ['Rent', 'Groceries', 'Utilities', 'Entertainment'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !amount) {
      alert('Please fill out all fields.');
      return;
    }

    const newTransaction = {
      type,
      category,
      amount: parseFloat(amount),
      description,
    };

    addTransaction(newTransaction); 
    setCategory('');
    setAmount('');
    setDescription('');
    setType(''); 
  };

  return (
    <div className="bg-white pb-6 pr-6 pl-6 shadow-md rounded-lg h-[610px] flex flex-col">

      <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
      <h4 className="text-md font-semibold mb-2 text-customTextGray text-custom-12px">Select Type</h4>

      <div className="flex mb-4 gap-3 min-h-[100px]">

        <button
          onClick={() => setType('Income')}
          className={`flex-1 p-4 border rounded-lg ${
            type === 'Income' ? 'border-customdrkgreen bg-customgreen' : 'bg-customGrayish text-customTextGray border-gray-300'
          }`}
        >
          Income
        </button>

        <button
          onClick={() => setType('Expense')}
          className={`flex-1 p-4 border rounded-lg ${
            type === 'Expense' ? 'border-customRed bg-customDullRed' : 'bg-customGrayish text-customTextGray border-gray-300'
          }`}
        >
          Expense
        </button>
        
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          
          <label className="block mb-1" htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            className="w-full border rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={!type} 
          >

            <option value="" disabled>Select Category</option>
            {type === 'Income' && incomeCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}

            {type === 'Expense' && expenseCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}

          </select>
        </div>

        <div className="mb-4">

          <label className="block mb-1" htmlFor="amount">Amount</label>

          <input
            id="amount"
            name="amount"
            className="w-full border rounded p-2"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$$$"
            disabled={!type} 
          />

        </div>

        <div className="mb-4">

          <label className="block mb-1" htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            className="w-full border rounded p-2 min-h-[140px] max-h-[200px] overflow-y-auto resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description..."
            disabled={!type} 
          />
          
        </div>

        <button className="w-full bg-customYellow text-white px-4 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 hover:border">
          Add Transaction
        </button>
      </form>


    </div>
  );
};

export default AddTransaction;
