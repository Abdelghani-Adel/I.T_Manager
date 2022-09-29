import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsActions from "./DetailsActions";
import DetailsRenewalDate from "./DetailsRenewalDate";

const SoftwareDetails = (props) => {
  const params = useParams();
  const softwareSlice = useSelector((state) => state.software);
  const software = softwareSlice.find((software) => software.id == params.id);

  return (
    <div className="col-10 col-xl-8 m-auto p-2 mb-2 bg-secondary rounded">
      <h3 className="text-white text-center fw-bold mb-2">
        {software.name} Software
      </h3>
      <hr className="text-white" />
      <div className="rounded bg-white p-2 mb-2">
        <h4>
          purchased on:{" "}
          <span className="text-primary fw-bold">{software.purchasedOn}</span>
        </h4>
        <DetailsRenewalDate software={software} />
        <h4>
          License is{" "}
          {software.expired ? (
            <span className="text-danger fw-bold">Not Activated.</span>
          ) : (
            <span className="text-success fw-bold">Activated.</span>
          )}
        </h4>
        <h4>
          Price :{" "}
          <span className="text-primary fw-bold">
            {software.price} {software.currency}
          </span>
        </h4>
      </div>

      <DetailsActions software={software} />
    </div>
  );
};

export default SoftwareDetails;
