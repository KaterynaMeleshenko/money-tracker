import { ADD_INCOME, ADD_OUTCOME, DELETE_INCOME, DELETE_OUTCOME} from "../types";
import { incomes, outcomes} from "../../constants";

const balance = 713;

const initialState = {
  incomes: incomes,
  outcomes: outcomes,
  balance: balance,
  currInId: 1,
  currOutId: 1,
}



function addChargeReducer (state = initialState, action) {

  switch(action.type) {
    case ADD_INCOME:
      return {
        incomes: [...state.incomes, {
          id: state.currInId + 1,
          category: action.newIncome.category,
          description: action.newIncome.description,
          date: action.newIncome.date,
          sum: (action.newIncome.sum).toFixed(2),
        }],
        outcomes: [...state.outcomes],
        balance: state.balance + action.newIncome.sum,
        currInId: state.currInId + 1,
        currOutId: state.currOutId,
      }
    case ADD_OUTCOME:
      return {
        incomes: [...state.incomes],
        outcomes: [...state.outcomes, {
          id: state.currOutId + 1,
          category: action.newOutcome.category,
          description: action.newOutcome.description,
          date: action.newOutcome.date,
          sum: (action.newOutcome.sum).toFixed(2),
        },],
        balance: state.balance - action.newOutcome.sum,
        currInId: state.currInId,
        currOutId: state.currOutId + 1,
      }
      case DELETE_INCOME:
        let obj = (state.incomes).find(obj => obj.id === action.data.incomeId);
        let index = (state.incomes).indexOf(obj);
        (state.incomes).splice(index, 1);
        
        return {
          incomes: state.incomes,
          outcomes: [...state.outcomes],
          balance: state.balance - (action.data.sum),
          currInId: state.currInId,
          currOutId: state.currOutId,
        }
        case DELETE_OUTCOME:
          let objOut = (state.outcomes).find(obj => obj.id === action.data.outcomeId);
          let indexOut = (state.outcomes).indexOf(objOut);
          (state.outcomes).splice(indexOut, 1);
          
          return {
            incomes: [...state.incomes],
            outcomes: state.outcomes,
            balance: state.balance + action.data.sum,
            currInId: state.currInId,
            currOutId: state.currOutId,
          }
        default:
          return state;
  }    
}

export default addChargeReducer;