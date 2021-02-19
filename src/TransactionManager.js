import { createContext, useReducer } from "react";
import TransactionReducer, {TransactionActionTypes} from "./TransactionReducer";

const defaultTransactions = [
    { id: 3, description: "Cash", amount: 5000 },
    { id: 2, description: "Book", amount: -40 },
    { id: 1, description: "Camera", amount: -200 }
];

const TransactionContext = createContext();


const TransactionManager = ({ children }) => {
    const [transactions, dispatch] = useReducer(TransactionReducer, defaultTransactions);

    function addTransaction(tranObj) {
        //generate new transaction id by incrementing last transactionid
        const newId = transactions.length == 0 ? 0 : transactions[0].id + 1;
        dispatch({
            type: TransactionActionTypes.ADD_TRANSACTION,
            payload: { id:newId, ...tranObj}
        });
    }

    function deleteTransaction(tranId) {
        dispatch({
            type: TransactionActionTypes.DELETE_TRANSACTION,
            payload: tranId
        });
    }

    function calculateBalance()  {
        let balance = transactions.reduce((total, tran) => {
            return total + tran.amount;
        }, 0)
        return balance.toFixed(2);
    }

    function calculateIncome()  {
        let income = transactions.reduce((total, tran) => {
            return tran.amount > 0 ? total + tran.amount : total;
        }, 0)
        return income.toFixed(2);
    }

    function calculateExpenses() {
        let expenses = transactions.reduce((total, tran) => {
            return tran.amount < 0 ? total + tran.amount : total;
        }, 0)
        return (expenses * -1).toFixed(2);
    }

    const actions = {
        addTransaction,
        deleteTransaction,
        calculateBalance,
        calculateIncome,
        calculateExpenses
    }

    return (
        <TransactionContext.Provider value={{
            transactions,
            actions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionManager;
export { TransactionContext };