import './App.css';
import TransactionManager from "./TransactionManager"
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpense from './IncomeExpense';
import History from './History';
import AddTransaction from './AddTransaction';

function App() {
  return (
    <TransactionManager>
      <div className="container">

        <Header/>

        <Balance/>

        <IncomeExpense/>

        <History/>

        <AddTransaction/>

      </div>
    </TransactionManager>

  );
}

export default App;
