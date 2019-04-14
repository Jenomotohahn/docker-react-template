import { GET_ALL_DATA } from "../actions/actions";

export const dataReducer = (state = [], action) => {
  console.log("Reducer action", action);
  console.log("Current State", state);
  if (action.type === GET_ALL_DATA) {
    console.log("action.payload in GET_ALL_DATA", action.payload);
    return action.payload;
  } else {
    return state;
  }
};

export default dataReducer;
