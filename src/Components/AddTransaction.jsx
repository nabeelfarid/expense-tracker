import { useContext, useState } from "react";
import { TransactionContext } from "../TransactionManager";

const AddTransaction = () => {
    
    const { actions } = useContext(TransactionContext);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddTransaction = (event) => {
        //prevent form submit page refresh
        event.preventDefault();
        //valid text and amount
        const parsedAmount = Number(amount);
        if (!isNaN(parsedAmount) && parsedAmount != 0 && description.trim() !== "") {
            actions.addTransaction({ 
                description: description.trim(), 
                amount: Number(parsedAmount.toFixed(2)) });
            //reset form fields    
            setDescription("");
            setAmount("");
        }
    }

    return(
            <div className="addtransaction">
                <h3>Add New Transaction</h3>
                <hr />
                <form onSubmit={handleAddTransaction}>
                    <label htmlFor="text">Text</label>
                    <br />
                    <input type="text" id="text" name="text" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                    <br />
                    <label htmlFor="amount">Amount</label>
                    <br />
                    <input id="amount" name="amount" value={amount} onChange={(event) => { setAmount(event.target.value) }} />
                    <br />
                    <input type="submit" value="Add Transaction"></input>
                </form>
            </div>
    );
}

export default AddTransaction;