import SoftwarePageRoutes from "./SoftwarePageRoutes";

const SoftwarePage = (props) => {
  return (
    <div className="row g-2">
      <h2 className="mb-2 fs-sm-1 fs-md-6">Software</h2>
      <SoftwarePageRoutes {...props} />
    </div>
  );
};

export default SoftwarePage;
