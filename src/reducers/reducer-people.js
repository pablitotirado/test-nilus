import {
  GET_ITEMS_INIT,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from "types/people";

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: false,
  nextPage: "",
  prevPage: "",
};

const reducerItems = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_INIT:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
        items: action.payload.items,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
        items: action.payload.items,
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default reducerItems;
