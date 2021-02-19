import { useContext } from "react";
import { TransactionContext } from "./TransactionManager";

const History = () => {
    
    const {transactions, actions} = useContext(TransactionContext);
    
    return (
    <div className="history">
        <h3>History</h3>
        <hr />
        <ul className="transaction-list">
            {transactions.map((trans, index) => {
                
                return (
                    <li key={trans.id}>
                        <span>{trans.description}</span>
                        <span className={`amount ${trans.amount < 0 ? "expense": ""}`}>{trans.amount.toFixed(2)}</span>
                        <span><button onClick={() => { actions.deleteTransaction(trans.id) }}>x</button></span>
                    </li>)
            })}

        </ul>
    </div>
    );
}

export default History;