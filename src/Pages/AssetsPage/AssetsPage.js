import { Link } from "react-router-dom";
import AssetsPageRoutes from "./AssetsRoutes";

const AssetsPage = (props) => {
  return (
    <div className="row g-2">
      <h2 className="mb-2 fs-sm-1 fs-md-6">Assets</h2>
      <div className="actions mb-2">
        <Link
          to="/assets/add"
          className="btn btn-success me-2 text-white text-decoration-none"
        >
          New Asset
        </Link>
      </div>

      <AssetsPageRoutes routes={props.routes} />
    </div>
  );
};

export default AssetsPage;
