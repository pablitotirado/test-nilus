import {
  GET_ITEM_INIT,
  GET_ITEM_SUCCESS,
  GET_ITEM_ERROR,
} from "types/item-active";

const initialState = {
  loading: false,
  item: {},
  error: false,
  errorMessage: "",
};

const reducerItemActive = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ITEM_INIT:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        item: payload.item,
        error: payload.error,
      };

    case GET_ITEM_ERROR:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
};

export default reducerItemActive;
