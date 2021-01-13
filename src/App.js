import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import StepTwo from "./Step_3";

// import DataTable from "./DataTable";
import DataTableMaterialUI from "./Step_2";
function App() {
  return (
    <div className="App">
      {/* <DataTable /> */}
      <DataTableMaterialUI />
      {/* <StepTwo /> */}
    </div>
  );
}

export default App;
