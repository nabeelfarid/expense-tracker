import { useContext } from "react";
import { TransactionContext } from "./TransactionManager";

const Balance = () =>
{
    const {actions} = useContext(TransactionContext);
    
    return (
    <div className="balance">
        <h3>Balance</h3>
        ${actions.calculateBalance()}
    </div>);
}

export default Balance;