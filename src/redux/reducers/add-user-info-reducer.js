import { ADD_USER_INFO} from "../types";
import { user } from "../../constants";

const userInitialState = user;

function addUserInfo(state = userInitialState, action) {
  switch(action.type) {
    case ADD_USER_INFO:
      return (
        {
          id: 0,
          name: action.newUser.name,
          phone: action.newUser.phone,
          photo: action.newUser.photo,
          alarm: action.newUser.alarm,
          limit: action.newUser.limit,
        }
      )
    default:
      return state;
  }    
}

export default addUserInfo;