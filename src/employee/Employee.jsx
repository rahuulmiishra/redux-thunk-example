import React from "react";
import { connect } from "react-redux";
import { getEmployeeData } from "../redux";

const Employee = (props) => {
  const { empData = [], isLoading = false, getEmpData } = props;

  React.useEffect(() => {
    getEmpData();
  }, []);

  if (isLoading) {
    return <h1>Loading Employees...</h1>;
  }

  return (
    <div>
      {empData.map((data, index) => {
        return <h3 key={index}>index</h3>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    empData: state.empData,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmpData: () => dispatch(getEmployeeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
