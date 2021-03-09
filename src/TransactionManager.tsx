import { useReducer } from "react";
import { Transaction } from "./Transaction";
import { defaultTransactions } from "./defaultTransactions";
import TransactionReducer from "./TransactionReducer";
import { TransactionActionType } from "./TransactionActionType";
import { TransactonActions } from "./TransactionContext";
import TransactionContext, {  } from "./TransactionContext";

const TransactionManager : React.FC = ({ children }) => {
    
    const [transactions, dispatch] = useReducer(TransactionReducer, defaultTransactions);

    function addTransaction(tranObj : Transaction) {
        //generate new transaction id by incrementing last transactionid
        const newId = transactions.length == 0 ? 0 : transactions[0].id + 1;
        dispatch({
            type: TransactionActionType.ADD_TRANSACTION,
            payload: {...tranObj, id:newId}
        });
    }

    function deleteTransaction(tranId : number) {
        dispatch({
            type: TransactionActionType.DELETE_TRANSACTION,
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

    const actions : TransactonActions = {
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