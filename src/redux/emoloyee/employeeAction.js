import { UPDATE_EMP_DATA, IS_GETTING_EMP_DATA } from "./employeeActionTypes";

const getEmployeeData = () => {
  return (dispatch) => {
    dispatch(updateLoadingStateOfEmpData(true));
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      dispatch(updateEmpData(data));
      dispatch(updateLoadingStateOfEmpData(false));
    }, 2000);
  };
};

const updateEmpData = (data) => {
  return {
    type: UPDATE_EMP_DATA,
    payload: data,
  };
};

const updateLoadingStateOfEmpData = (status) => {
  return {
    type: IS_GETTING_EMP_DATA,
    payload: status,
  };
};

export { getEmployeeData, updateLoadingStateOfEmpData };
