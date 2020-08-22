import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Employee from "./employee/Employee";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Employee />
      </div>
    </Provider>
  );
}

export default App;
