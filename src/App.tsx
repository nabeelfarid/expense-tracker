import './App.css';
import TransactionManager from "./Components/TransactionManager"
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History';
import AddTransaction from './Components/AddTransaction';

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
