import { useContext } from 'react';
import { TransactionContextType } from "../TransactionContext";
import { TransactionContext } from "../TransactionManager";

const Balance = () =>
{
    const {actions} = useContext<TransactionContextType>(TransactionContext);
    
    return (
    <div className="balance">
        <h3>Balance</h3>
        ${actions.calculateBalance()}
    </div>);
}

export default Balance;