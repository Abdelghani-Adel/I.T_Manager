import { Fragment } from "react";
import AssetsSoftwareTable from "./AssetsSoftwareTable/AssetsSoftwareTable";

const AssetsSoftware = (props) => {
  return (
    <Fragment>
      <h2 className="text-center fw-bold text-secondary">Software Licenses</h2>
      <AssetsSoftwareTable />
    </Fragment>
  );
};

export default AssetsSoftware;
