import { createContext } from "react";
import { Transaction } from "./Transaction";
import { defaultTransactions } from "./defaultTransactions";

export interface ITransactionContextType {
    transactions: Transaction[];
    actions: ITransactonActions;
};

export interface ITransactonActions {
    addTransaction : (tran : Transaction) => void,
    deleteTransaction : (id : number) => void,
    calculateBalance : () => string,
    calculateIncome : () => string,
    calculateExpenses: () => string
} 

export const TransactionContext = createContext<ITransactionContextType>({
    transactions: defaultTransactions,
    actions : {
        addTransaction : () => {},
        deleteTransaction : ( ) => {},
        calculateBalance : () => '',
        calculateIncome : () => '',
        calculateExpenses: () => ''
    }
});

export default TransactionContext;
