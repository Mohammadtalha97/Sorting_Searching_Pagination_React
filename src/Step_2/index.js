import React from "react";
import MuiDataTables from "mui-datatables";

const DataTableMaterialUI = () => {
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <>
      <MuiDataTables
        title={"Employee List"}
        data={data}
        columns={columns}
        // options={options}
      />
    </>
  );
};

export default DataTableMaterialUI;
