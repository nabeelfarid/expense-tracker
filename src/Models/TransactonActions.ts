import Transaction from "./Transaction";

type TransactonActions = {
    addTransaction: (tran: Transaction) => void;
    deleteTransaction: (id: number) => void;
    calculateBalance: () => string;
    calculateIncome: () => string;
    calculateExpenses: () => string;
}

export default TransactonActions