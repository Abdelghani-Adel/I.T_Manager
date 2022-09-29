import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SoftwareDetails = (props) => {
  const params = useParams();
  const softwareSlice = useSelector((state) => state.software);
  const software = softwareSlice.find((software) => software.id == params.id);

  // const softwareDate = new Date(software.purchasedOn);
  let nextRenewalDate = new Date(software.purchasedOn);
  let nextRenewal;
  if (software.annualFees) {
    nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
  } else if (software.monthlyFees) {
    nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
  } else if (software.lifeTimeLicense) {
    nextRenewal = (
      <span className="text-success">
        This software has a life-time license.
      </span>
    );
  }

  nextRenewal = nextRenewalDate.toLocaleDateString();

  return (
    <div className="col-10 col-xl-8 m-auto p-2 mb-2 bg-secondary rounded">
      <h3 className="text-white text-center">{software.name} Software</h3>
      <hr className="text-white" />
      <div className="rounded bg-white p-2">
        <h4>purchased on: {software.purchasedOn}</h4>
        <h4>Next Renewal Date: {nextRenewal}</h4>
        <h4>
          License is{" "}
          {software.expired ? (
            <span className="text-danger">Not Activated.</span>
          ) : (
            <span className="text-success">Activated.</span>
          )}
        </h4>
        <h4>
          Price : {software.price} {software.currency}
        </h4>
      </div>
    </div>
  );
};

export default SoftwareDetails;
