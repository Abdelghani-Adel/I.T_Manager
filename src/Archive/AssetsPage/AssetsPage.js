import { Link } from "react-router-dom";
import AssetsPageRoutes from "./AssetsRoutes";

const AssetsPage = (props) => {
  return (
    <div className="row g-2">
      <h2 className="mb-2 fs-sm-1 fs-md-6">Assets</h2>

      <AssetsPageRoutes routes={props.routes} />
    </div>
  );
};

export default AssetsPage;
