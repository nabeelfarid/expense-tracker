import { useContext } from "react";
import TransactionContext from "./TransactionContext";
import { DeleteTransaction } from "./TransactionReducerActions";

const History = () => {
  const { transactions, dispatch } = useContext(TransactionContext);

  return (
    <div className="history">
      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((trans, index) => {
          return (
            <li key={trans.id}>
              <span>{trans.description}</span>
              <span className={`amount ${trans.amount < 0 ? "expense" : ""}`}>
                {trans.amount.toFixed(2)}
              </span>
              <span>
                <button
                  onClick={() => {
                    dispatch(DeleteTransaction(trans.id));
                  }}
                >
                  x
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
