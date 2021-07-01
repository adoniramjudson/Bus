import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_BUSES,
  GET_BUS,
  BUS_ERROR,
  SEARCH_ERROR,
  SEARCH_BUSES,
  ADD_BUS,
} from "./types";

// Get Buses
export const getbuses = () => async (dispatch) => {
  console.log("my bad");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/buses/myBuses", config);

    dispatch({
      type: GET_BUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Search Buses
export const searchbuses = (formData, history) => async (dispatch) => {
  console.log(formData);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/api/buses/searchBuses", formData, config);

    dispatch({
      type: SEARCH_BUSES,
      payload: res.data,
    });
    console.log("ffff");
    // localStorage.setItem("type", value);
    history.push("/buses");
  } catch (err) {
    console.log(err);
    dispatch({
      type: BUS_ERROR,
      payload: {
        msg: err?.response?.statusText,
        status: err?.response?.status,
      },
    });
    // history.push("/landing");
  }
};

//Add Buses
export const addbus = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/api/buses/add", formData, config);

    dispatch({
      type: ADD_BUS,
      payload: res.data,
    });

    dispatch(setAlert("Bus Added", "success"));
  } catch (err) {
    dispatch({
      type: BUS_ERROR,
      payload: {
        msg: err?.response?.statusText,
        status: err?.response?.status,
      },
    });
    dispatch(setAlert("Bus Adding Error", "danger"));
  }
};
