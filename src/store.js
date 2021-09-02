import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addChargeReducer from "./redux/reducers/add-charge-reducer";
import addUserInfo from "./redux/reducers/add-user-info-reducer";
import { compose } from "redux";
import addCategoryReducer from "./redux/reducers/add-category-reducer";


function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
      localStorage.setItem("moneyTrackerState", serialisedState);
  } catch (e) {
      console.warn(e);
  }
}
  

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("moneyTrackerState");
    
    if (serialisedState === null) {
      return undefined;
    }
    
    return JSON.parse(serialisedState);
  } catch (e) {
      console.warn(e);

      return undefined;
    }
}

const reducer = combineReducers({
  addChargeReducer,
  addUserInfo,
  addCategoryReducer,
})

const composedEnhancer = compose(loadFromLocalStorage())

const store = createStore(
  reducer,
  composedEnhancer,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;