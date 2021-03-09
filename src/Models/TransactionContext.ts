import { createContext } from "react";
import Transaction from "./Transaction";
import DefaultTransactions from "./DefaultTransactions";
import TransactonActions from "./TransactonActions";

export type TransactionContextType = {
    transactions: Transaction[];
    actions: TransactonActions;
};

const TransactionContext = createContext<TransactionContextType>({
    transactions: DefaultTransactions,
    actions: {
        addTransaction: () => { },
        deleteTransaction: () => { },
        calculateBalance: () => '',
        calculateIncome: () => '',
        calculateExpenses: () => ''
    }
});

export default TransactionContext;
