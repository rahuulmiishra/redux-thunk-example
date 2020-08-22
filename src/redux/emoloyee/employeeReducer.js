import { UPDATE_EMP_DATA, IS_GETTING_EMP_DATA } from "./employeeActionTypes";

const initialState = {
  empData: [],
  isLoading: false,
  errorMessage: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMP_DATA: {
      return { ...state, empData: [...action.payload] };
    }

    case IS_GETTING_EMP_DATA: {
      return { ...state, isLoading: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default employeeReducer;
