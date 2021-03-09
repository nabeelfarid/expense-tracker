import { useContext } from 'react';
import TransactionContext, {TransactionContextType} from "../Models/TransactionContext";

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