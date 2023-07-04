import { QUERY_TYPE } from "../../utils/types";

export const reducer = (state, action ) => {
  switch (action.type) {
    case QUERY_TYPE:
      return {...state, queryName: action?.payload.type};
    default:
      return state;
  }
};
