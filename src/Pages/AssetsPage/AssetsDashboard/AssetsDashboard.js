import { Fragment } from "react";
import Table from "../../../Components/UI/Table/Table";
import AssetsTable from "./AssetsTable";

const AssetsDashboard = (props) => {
  return (
    <Fragment>
      <h2>Assets Dashboard</h2>
      {/* <Table dataArray={dataArray} columns={columns} dataTitle="Assets" /> */}
      <AssetsTable />
    </Fragment>
  );
};

export default AssetsDashboard;
