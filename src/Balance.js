import { useContext } from "react";
import TransactionContext from "./TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  function calculateBalance() {
    let balance = transactions.reduce((total, tran) => {
      return total + tran.amount;
    }, 0);
    return balance.toFixed(2);
  }

  return (
    <div className="balance">
      <h3>Balance</h3>${calculateBalance()}
    </div>
  );
};

export default Balance;
