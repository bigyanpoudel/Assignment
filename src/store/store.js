import {auth} from './reducer';
import {applyMiddleware,createStore,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
let initialState = {};
const user  =  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
if(user)
{
    initialState = {
      auth:{ 
         isAuth:true,
        user:user
      }
    }
}
const rootReducer = combineReducers({
    auth:auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)))