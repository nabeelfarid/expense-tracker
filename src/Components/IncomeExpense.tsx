import { useContext } from "react";
import { TransactionContext } from "./TransactionManager";

const IncomeExpense : React.FC = () => {
    
    const {actions} = useContext(TransactionContext);
    
    return(
        <div className="incomeexpense">
            <span>
                <h3>Income</h3>
                ${actions.calculateIncome()}       
                </span>
            <span>
                <h3>Expense</h3>
                <span className="expense">${actions.calculateExpenses()}</span>
            </span>
        </div>
    );
}

export default IncomeExpense;