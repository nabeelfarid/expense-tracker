import { useReducer } from "react";
import Transaction from "../Models/Transaction";
import TransactionReducer from "../Models/TransactionReducer";
import TransactionActionTypes from "../Models/TransactionActionTypes";
import TransactionContext from "../Models/TransactionContext";
import DefaultTransactions from "../Models/DefaultTransactions";

const TransactionManager: React.FC = ({ children }) => {

    const [transactions, dispatch] = useReducer(TransactionReducer, DefaultTransactions);

    function addTransaction(tranObj: Transaction) {
        //generate new transaction id by incrementing last transactionid
        const newId = transactions.length == 0 ? 0 : transactions[0].id + 1;
        dispatch({
            type: TransactionActionTypes.ADD_TRANSACTION,
            payload: { ...tranObj, id: newId }
        });
    }

    function deleteTransaction(tranId: number) {
        dispatch({
            type: TransactionActionTypes.DELETE_TRANSACTION,
            payload: tranId
        });
    }

    function calculateBalance() {
        let balance = transactions.reduce((total, tran) => {
            return total + tran.amount;
        }, 0)
        return balance.toFixed(2);
    }

    function calculateIncome() {
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

    return (
        <TransactionContext.Provider value={{
            transactions,
            actions: {
                addTransaction,
                deleteTransaction,
                calculateBalance,
                calculateIncome,
                calculateExpenses
            }
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionManager;
export { TransactionContext };