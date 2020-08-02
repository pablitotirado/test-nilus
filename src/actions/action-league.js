import {
  GET_LIST_LEAGUE_INIT,
  GET_LIST_LEAGUE_SUCCESS,
  GET_LIST_LEAGUE_ERROR,
  ADD_ITEM_SELECTED,
  DELETE_LEAGUE,
  ACTIVATED_EDIT,
  LOADING_COMPLETE,
  LEAGUE_COMPLETE,
} from "types/league";
import Http from "api/client-http";

const items = new Http();

const urls = [
  "http://swapi.dev/api/people/",
  "http://swapi.dev/api/planets/",
  "http://swapi.dev/api/species/",
  "http://swapi.dev/api/starships/",
];

const generateState = async items => await items.map(r => r.results);

export const ActionGetItemsLeague = () => async dispatch => {
  dispatch({
    type: GET_LIST_LEAGUE_INIT,
    payload: {
      loading: true,
      error: false,
    },
  });

  const response = await Promise.all(
    urls.map(async url => await items.getItems(url))
  );

  const [people, planets, species, starships] = await generateState(response);

  try {
    setTimeout(() => {
      dispatch({
        type: GET_LIST_LEAGUE_SUCCESS,
        payload: {
          loading: false,
          error: false,
          items: { people, planets, species, starships },
        },
      });
    }, 200);
  } catch (error) {
    dispatch({
      type: GET_LIST_LEAGUE_ERROR,
      payload: {
        loading: false,
        error: true,
        errorMessage: error.message,
      },
    });
  }
};

export const ActionItemSelected = (item, name, next) => dispatch => {
  dispatch({
    type: ADD_ITEM_SELECTED,
    payload: {
      loading: true,
      [name]: item,
      name,
      next,
      myLeagueActive: {
        [`${name}Active`]: false,
        [`${next}Active`]: true,
      },
    },
  });

  setTimeout(() => {
    dispatch({
      type: LOADING_COMPLETE,
      payload: {
        loading: false,
      },
    });
  }, 1000);
};

export const ActionLeagueComplete = () => dispatch => {
  dispatch({
    type: LEAGUE_COMPLETE,
    payload: {
      myLeagueActive: {
        speciesActive: false,
        peopleActive: false,
        planetsActive: false,
        starshipsActive: false,
      },
      leagueComplete: true,
    },
  });
};

export const ActionActivatedEdit = () => dispatch => {
  dispatch({
    type: ACTIVATED_EDIT,
    payload: {
      loading: true,
      myLeagueActive: {
        speciesActive: true,
        peopleActive: false,
        planetsActive: false,
        starshipsActive: false,
      },
      leagueComplete: false,
      myLeague: null,
    },
  });

  setTimeout(() => {
    dispatch({
      type: LOADING_COMPLETE,
      payload: {
        loading: false,
      },
    });
  }, 1000);
};

export const ActionDeleteLeague = () => dispatch => {
  dispatch({
    type: DELETE_LEAGUE,
    payload: {
      loading: true,
      myLeagueActive: {
        speciesActive: true,
        peopleActive: false,
        planetsActive: false,
        starshipsActive: false,
      },
      leagueComplete: false,
    },
  });

  setTimeout(() => {
    dispatch({
      type: LOADING_COMPLETE,
      payload: {
        loading: false,
      },
    });
  }, 1000);
};
