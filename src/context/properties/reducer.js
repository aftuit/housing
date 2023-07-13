import { QUERY_TYPE, TAB_TYPE, WISH_ADD_TYPE, WISH_REMOVE_TYPE } from "../../utils/types";

export const reducer = (state, action ) => {
  switch (action.type) {
    case QUERY_TYPE:
      return {...state, queryName: action?.payload.type};
    case TAB_TYPE:
      return {...state, tabKey: action?.payload.tab};
    case WISH_ADD_TYPE:
      return {...state, wishList: action?.payload.list };
    case WISH_REMOVE_TYPE:
      return {...state, wishList: action?.payload.list };
    default:
      return state;
  }
};
