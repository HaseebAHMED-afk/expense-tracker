import React from 'react';
import {Header} from './Header';
import '../App.css';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import {GlobalProvider} from '../context/GlobalContext';


function App() {
  return <GlobalProvider>
    <Header  />
    <div className="balance-container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
}

export default App;
