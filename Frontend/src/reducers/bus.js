import {
  GET_BUSES,
  GET_BUS,
  BUS_ERROR,
  SEARCH_BUSES,
  SEARCH_ERROR,
  ADD_BUS,
} from "../actions/types";

const initialState = {
  buses: [],
  bus: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BUS:
      return {
        ...state,
        bus: payload,
        loading: false,
      };
    case SEARCH_BUSES:
      return {
        ...state,
        buses: payload,
        loading: false,
      };
    case GET_BUSES:
      return {
        ...state,
        buses: payload,
        loading: false,
      };
    case ADD_BUS:
      return {
        ...state,
        buses: payload,
        loading: false,
      };
    case SEARCH_ERROR:
    case BUS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
