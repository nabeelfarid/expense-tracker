import { createContext } from "react";
import { Transaction } from "./Transaction";
import { defaultTransactions } from "./defaultTransactions";

export interface TransactionContextType {
    transactions: Transaction[];
    actions: TransactonActions;
};

export type TransactonActions = {
    addTransaction : (tran : Transaction) => void,
    deleteTransaction : (id : number) => void,
    calculateBalance : () => string,
    calculateIncome : () => string,
    calculateExpenses: () => string
} 

export const TransactionContext = createContext<TransactionContextType>({
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
