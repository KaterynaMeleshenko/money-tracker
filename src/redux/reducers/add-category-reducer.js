import { ADD_CATEGORY, DELETE_CATEGORY } from "../types";
import { categories} from "../../constants";

const categoriesInitialState = {
  categories: categories,
  currCatId: 3,
}

function addCategoryReducer(state = categoriesInitialState, action) {
    
  switch(action.type) {
    case ADD_CATEGORY:
      return {
        categories: [...state.categories, {
          id: state.currCatId + 1,
          name: action.newCategory.name,
          icon: action.newCategory.icon,
          description: action.newCategory.description,
          date: action.newCategory.date,
        }],
        currCatId: state.currCatId + 1,
        }
    case DELETE_CATEGORY:
      let obj = (state.categories).find(obj => obj.id === action.categoryId);
      let index = (state.categories).indexOf(obj);
      (state.categories).splice(index, 1);
      
      return {
        categories: state.categories,
        currCatId: state.currCatId,
      }
      default:
        return state;
  }    
}

export default addCategoryReducer;