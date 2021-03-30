import "./App.css";
import { useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
import DefaultTransactions from "./DefaultTransactions";
import TransactionContext from "./TransactionContext";
import Main from "./Main";

const App = () => {
  const [transactions, dispatch] = useReducer(
    TransactionReducer,
    DefaultTransactions
  );

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        dispatch,
      }}
    >
      <Main />
    </TransactionContext.Provider>
  );
};

export default App;
