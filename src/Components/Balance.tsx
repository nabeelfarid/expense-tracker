import { useContext } from 'react';
import { ITransactionContextType } from "../Models/TransactionContext";
import { TransactionContext } from "./TransactionManager";

const Balance = () =>
{
    const {actions} = useContext<ITransactionContextType>(TransactionContext);
    
    return (
    <div className="balance">
        <h3>Balance</h3>
        ${actions.calculateBalance()}
    </div>);
}

export default Balance;