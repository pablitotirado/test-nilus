import {
  GET_ITEM_INIT,
  GET_ITEM_SUCCESS,
  GET_ITEM_ERROR,
} from "types/item-active";

import Http from "api/client-http";

const item = new Http();

export const ActionItemActive = url => async dispatch => {
  dispatch({
    type: GET_ITEM_INIT,
    payload: {
      loading: true,
      error: false,
    },
  });
  const response = await item.getItemActive(url);
  try {
    dispatch({
      type: GET_ITEM_SUCCESS,
      payload: {
        loading: false,
        error: false,
        item: response,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_ITEM_ERROR,
      payload: {
        loading: false,
        error: true,
        errorMessage: error.message,
      },
    });
  }
};
