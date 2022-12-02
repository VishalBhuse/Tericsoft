import axios from "axios";
import { GET_EMP_ERROR, GET_EMP_LOADING, GET_EMP_SUCCESS } from "./action.type";

export const GetEMPApi = () => (dispatch) => {
  dispatch({ type: GET_EMP_LOADING });
  axios
    .get(`https://terisoftbackend.onrender.com/employess`)
    .then((r) => {
      dispatch({ type: GET_EMP_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_EMP_ERROR });
    });
};

export const AddEMPApi = (payload) => (dispatch) => {
  axios
    .post(`https://terisoftbackend.onrender.com/employess`, payload)
    .then((r) => {
      dispatch(GetEMPApi());
    })
    .catch((err) => {
      dispatch({ type: GET_EMP_ERROR });
      console.log(err);
    });
};

export const EditEMPApi = (id, payload) => (dispatch) => {
  axios
    .patch(`https://terisoftbackend.onrender.com/employess/${id}`, payload)
    .then((r) => {
      dispatch(GetEMPApi());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DelteEMPApi = (id) => (dispatch) => {
  axios
    .delete(`https://terisoftbackend.onrender.com/employess/${id}`)
    .then((r) => {
      dispatch(GetEMPApi());
    })
    .catch((err) => {
      console.log(err);
    });
};
