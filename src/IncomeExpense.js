import { useContext } from "react";
import TransactionContext from "./TransactionContext";

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);

  function calculateIncome() {
    let income = transactions.reduce((total, tran) => {
      return tran.amount > 0 ? total + tran.amount : total;
    }, 0);
    return income.toFixed(2);
  }

  function calculateExpenses() {
    let expenses = transactions.reduce((total, tran) => {
      return tran.amount < 0 ? total + tran.amount : total;
    }, 0);
    return (expenses * -1).toFixed(2);
  }

  return (
    <div className="incomeexpense">
      <span>
        <h3>Income</h3>${calculateIncome()}
      </span>
      <span>
        <h3>Expense</h3>
        <span className="expense">${calculateExpenses()}</span>
      </span>
    </div>
  );
};

export default IncomeExpense;
