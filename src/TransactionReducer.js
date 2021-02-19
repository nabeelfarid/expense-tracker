const TransactionActionTypes = { 
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    DELETE_TRANSACTION: 'DELETE_TRANSACTION'
}

const TransactionReducer = (state, action) =>{
    switch(action.type){
        case TransactionActionTypes.ADD_TRANSACTION: {
            
            return [action.payload, ...state];
        }
        case TransactionActionTypes.DELETE_TRANSACTION: {
            
            return state.filter((trans)=>{return trans.id != action.payload});
        }
        default:
            return state;    
    }

}

export default TransactionReducer;
export {TransactionActionTypes}
