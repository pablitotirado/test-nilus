import {
  GET_ITEMS_INIT,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from "types/people";
import Http from "api/client-http";

const items = new Http();

export const ActionItems = url => async dispatch => {
  dispatch({
    type: GET_ITEMS_INIT,
    payload: {
      loading: true,
      error: false,
    },
  });
  try {
    const { results, next, previous } = await items.getItems(url);
    setTimeout(() => {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: {
          loading: false,
          error: false,
          items: results,
          nextPage: next,
          prevPage: previous,
        },
      });
    }, 500);
  } catch ({ message }) {
    dispatch({
      type: GET_ITEMS_ERROR,
      payload: {
        error: true,
        loading: false,
        errorMessage: message,
      },
    });
  }
};
