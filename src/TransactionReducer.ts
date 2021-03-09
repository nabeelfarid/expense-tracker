import { Reducer } from "react";
import { Transaction } from "./Transaction";
import { TransactionActionType } from "./TransactionActionType";

type TransactionReducerAction = {
    type: TransactionActionType,
    payload: Transaction | number
}

const TransactionReducer: Reducer<Transaction[], TransactionReducerAction> = (state, action) => {
    switch (action.type) {
        case TransactionActionType.ADD_TRANSACTION: {

            return [action.payload as Transaction, ...state];
        }
        case TransactionActionType.DELETE_TRANSACTION: {

            return state.filter((trans) => { return trans.id != action.payload });
        }
        default:
            return state;
    }

}

export default TransactionReducer;
export { TransactionActionType as TransactionActionTypes }
