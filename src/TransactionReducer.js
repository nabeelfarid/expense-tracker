export const TransactionActionTypes = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
};

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION: {
      //generate new transaction id by incrementing last transactionid
      const newId = state.length == 0 ? 0 : state[0].id + 1;
      return [{ id: newId, ...action.payload.tranObj }, ...state];
    }
    case TransactionActionTypes.DELETE_TRANSACTION: {
      return state.filter((trans) => trans.id != action.payload);
    }
    default:
      return state;
  }
};

export default TransactionReducer;
