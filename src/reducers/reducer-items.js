import {
  GET_ITEMS_INIT,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from "types/items";

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: false,
  nextPage: "",
  prevPage: "",
};

const reducerItems = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ITEMS_INIT:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        nextPage: payload.nextPage,
        prevPage: payload.prevPage,
        items: payload.items,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        nextPage: payload.nextPage,
        prevPage: payload.prevPage,
        items: payload.items,
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: payload.error,
        errorMessage: payload.errorMessage,
        loading: payload.loading,
      };
    default:
      return state;
  }
};

export default reducerItems;
