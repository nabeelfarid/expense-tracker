import { TransactionActionTypes } from "./TransactionReducer";

export const AddTransaction = (tranObj) => {
  console.log(tranObj);
  return {
    type: TransactionActionTypes.ADD_TRANSACTION,
    payload: { tranObj },
  };
};
export const DeleteTransaction = (tranId) => {
  return {
    type: TransactionActionTypes.DELETE_TRANSACTION,
    payload: tranId,
  };
};
