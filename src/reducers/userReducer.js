import { FETCH_USERS,SEND_USERSLOCATİON } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case SEND_USERSLOCATİON:
    return {
      ...state,
      locations:action.payload
    }
    default:
      return state;
  }
}