import { Fragment } from "react";
import AssetsSoftwareTable from "../components/AssetsSoftwareTable/AssetsSoftwareTable";

const SoftwareDashboard = (props) => {
  return (
    <Fragment>
      <h2 className="text-center fw-bold text-secondary">Software Licenses</h2>
      <AssetsSoftwareTable />
    </Fragment>
  );
};

export default SoftwareDashboard;
