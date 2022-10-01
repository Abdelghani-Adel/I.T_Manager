import { Link } from "react-router-dom";
import SoftwarePageRoutes from "./SoftwarePageRoutes";

const SoftwarePage = (props) => {
  return (
    <div className="row g-2">
      <h2 className="mb-2 fs-sm-1 fs-md-6">Software</h2>
      <div className="actions mb-2">
        <Link
          className="btn btn-success me-2 text-white text-decoration-none"
          to="/software/add"
        >
          New Software
        </Link>
      </div>

      <SoftwarePageRoutes {...props} />
    </div>
  );
};

export default SoftwarePage;
