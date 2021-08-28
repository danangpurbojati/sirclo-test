import { combineReducers, createStore } from 'redux';

// import reducers here
import customerReducer from '../features/Customers/reducer';

const rootReducers = combineReducers({
    customers: customerReducer
})

const store = createStore(rootReducers);

export default store;