import { Fragment } from "react";
import Table from "../../../Components/UI/Table/Table";
import AssetsTable from "./AssetsTable";

const AssetsDashboard = (props) => {
  return (
    <Fragment>
      <h2 className="text-center fw-bold text-secondary">Software Licenses</h2>
      {/* <Table dataArray={dataArray} columns={columns} dataTitle="Assets" /> */}
      <AssetsTable />
    </Fragment>
  );
};

export default AssetsDashboard;
