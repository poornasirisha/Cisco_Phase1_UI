import { createStore } from 'redux';

const initialState = {
    value:0
}

const rootReducer  = (state = initialState, action)=>{
    switch(action.type){
        case 'UPDATE_VALUE':
            return {
                ...state,value:action.payload
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;

