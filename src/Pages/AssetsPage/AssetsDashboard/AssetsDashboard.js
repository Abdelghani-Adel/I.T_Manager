import { Fragment } from "react";
import Table from "../../../Components/UI/Table/Table";

const AssetsDashboard = (props) => {
  const dataArray = [
    {
      id: 1,
      subject: "I can't print",
      status: "Pending",
      user: "Saleh",
      priority: "high",
    },
  ];
  const colsTitles = [
    { title: "subject", className: "", id: 1 },
    { title: "user", className: "", id: 2 },
    { title: "status", className: "", id: 3 },
    { title: "priority", className: "", id: 4 },
  ];
  return (
    <Fragment>
      <h2>Assets Dashboard</h2>
      <Table dataArray={dataArray} colsTitles={colsTitles} dataTitle="Assets" />
    </Fragment>
  );
};

export default AssetsDashboard;
