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

const initialState = {
  loading: false,
  error: false,
  errorMessage: false,
  items: {
    people: [],
    species: [],
  },
  name: "",
  next: "",
  myLeague: localStorage.getItem("galacticLeague")
    ? JSON.parse(localStorage.getItem("galacticLeague"))
    : null,
  myLeagueActive: {
    speciesActive: true,
    peopleActive: false,
    planetsActive: false,
    starshipsActive: false,
  },
  leagueComplete: localStorage.getItem("galacticLeague") ? true : false,
};

const reducerLeague = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_LIST_LEAGUE_INIT:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
      };
    case GET_LIST_LEAGUE_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        items: payload.items,
      };
    case GET_LIST_LEAGUE_ERROR:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        errorMessage: payload.errorMessage,
      };
    case ADD_ITEM_SELECTED:
      return {
        ...state,
        loading: payload.loading,
        myLeagueActive: {
          ...state.myLeagueActive,
          ...payload.myLeagueActive,
        },
        myLeague: {
          ...state.myLeague,
          [payload.name]: state.items[payload.name].filter(p =>
            payload[payload.name].includes(p.name)
          ),
        },
      };
    case LEAGUE_COMPLETE:
      localStorage.setItem("galacticLeague", JSON.stringify(state.myLeague));
      return {
        ...state,
        myLeagueActive: payload.myLeagueActive,
        leagueComplete: payload.leagueComplete,
      };
    case ACTIVATED_EDIT:
      return {
        ...state,
        loading: payload.loading,
        myLeagueActive: payload.myLeagueActive,
        leagueComplete: payload.leagueComplete,
      };
    case DELETE_LEAGUE:
      localStorage.removeItem("galacticLeague");
      return {
        ...state,
        loading: payload.loading,
        myLeagueActive: payload.myLeagueActive,
        leagueComplete: payload.leagueComplete,
        myLeague: payload.myLeague,
      };
    case LOADING_COMPLETE:
      return {
        ...state,
        loading: payload.loading,
      };
    default:
      return state;
  }
};

export default reducerLeague;
