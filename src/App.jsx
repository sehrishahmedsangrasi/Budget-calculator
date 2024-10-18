import { useState } from 'react';
import { TransactionProvider } from './TransactionContext'; 
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import FinancialSummary from './components/FinancialSummary';

function App() {
 
  const [visibleSection, setVisibleSection] = useState('add'); 

  const handleSectionToggle = (section) => {
    
    setVisibleSection(section);
  };

  return (
    <TransactionProvider>
      <div className="max-w-screen-xl mx-auto p-8">
        <Header />

        
        <div className="hidden sm:grid lg:grid-cols-3 gap-4 bg-white">
          <AddTransaction />
          <TransactionHistory />
          <FinancialSummary />
        </div>

        
        <div className="block sm:hidden">
          
          {visibleSection === 'add' ? (
            <div>
              <AddTransaction />
              <div className="flex justify-center mt-4">

                <button
                  onClick={() => handleSectionToggle('summary')} 
                  className="w-full bg-customYellow text-white px-4 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 hover:border"
                >
                  Financial Summary
                </button>

                <button
                  onClick={() => handleSectionToggle('history')} 
                  className="w-full bg-customYellow text-white px-4 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 hover:border ml-4"
                >
                  Transaction History
                </button>
                
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {visibleSection === 'history' && <TransactionHistory />}
              {visibleSection === 'summary' && <FinancialSummary />}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleSectionToggle('add')} 
                  className="w-full bg-customYellow text-white px-4 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 hover:border"
                >
                  Add Transaction
                </button>
                <button
                  onClick={() => handleSectionToggle(visibleSection === 'history' ? 'summary' : 'history')} 
                  className="w-full bg-customYellow text-white px-4 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 hover:border ml-4"
                >
                  {visibleSection === 'history' ? 'Financial Summary' : 'Transaction History'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
