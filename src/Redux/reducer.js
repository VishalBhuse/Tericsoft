import { GET_EMP_ERROR, GET_EMP_LOADING, GET_EMP_SUCCESS } from "./action.type";

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const EmpReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_EMP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_EMP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_EMP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
