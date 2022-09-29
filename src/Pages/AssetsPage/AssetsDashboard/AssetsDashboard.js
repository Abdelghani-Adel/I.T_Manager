import { Fragment } from "react";
import Table from "../../../Components/UI/Table/Table";

const AssetsDashboard = (props) => {
  const dataArray = [{}];
  const colsTitles = [
    { title: "col1", className: "", id: 1 },
    { title: "col2", className: "", id: 2 },
    { title: "col3", className: "", id: 3 },
    { title: "col4", className: "", id: 4 },
  ];
  return (
    <Fragment>
      <h2>Assets Dashboard</h2>
      <Table dataArray={dataArray} colsTitles={colsTitles} dataTitle="Assets" />
    </Fragment>
  );
};

export default AssetsDashboard;
