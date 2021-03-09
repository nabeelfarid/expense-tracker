import { Reducer } from "react";
import Transaction from "./Transaction";
import TransactionActionTypes from "./TransactionActionTypes";

type TransactionReducerAction = {
    type: TransactionActionTypes,
    payload: Transaction | number
}

const TransactionReducer: Reducer<Transaction[], TransactionReducerAction> = (state, action) => {
    switch (action.type) {
        case TransactionActionTypes.ADD_TRANSACTION: {

            return [action.payload as Transaction, ...state];
        }
        case TransactionActionTypes.DELETE_TRANSACTION: {

            return state.filter((trans) => { return trans.id != action.payload });
        }
        default:
            return state;
    }

}

export default TransactionReducer;
