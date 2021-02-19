import './App.css';
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpense from './IncomeExpense';
import History from './History';
import AddTransaction from './AddTransaction';

const Main = () => {

    return (
        <div className="container">

            <Header/>

            <Balance/>

            <IncomeExpense/>

            <History/>

            <AddTransaction/>

        </div>);
}

export default Main;