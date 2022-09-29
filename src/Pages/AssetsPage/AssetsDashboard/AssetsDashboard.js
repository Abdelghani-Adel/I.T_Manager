import { Fragment } from "react";
import Table from "../../../Components/UI/Table/Table";
import AssetsTable from "./AssetsTable";

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
  const columns = [
    { title: "subject", className: "", id: 1 },
    { title: "user", className: "", id: 2 },
    { title: "status", className: "", id: 3 },
    { title: "priority", className: "", id: 4 },
  ];
  return (
    <Fragment>
      <h2>Assets Dashboard</h2>
      {/* <Table dataArray={dataArray} columns={columns} dataTitle="Assets" /> */}
      <AssetsTable dataArray={dataArray} columns={columns} dataTitle="Assets" />
    </Fragment>
  );
};

export default AssetsDashboard;
