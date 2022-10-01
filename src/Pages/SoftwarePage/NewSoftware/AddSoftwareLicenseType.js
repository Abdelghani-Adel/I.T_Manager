import { useState } from "react";

const AddSoftwareLicenseType = (props) => {
  const { licenseType, setLicenseType } = props;
  return (
    <div className="col-md-12">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked={licenseType === "lifeTimeLicense"}
          onChange={() => setLicenseType((prev) => "lifeTimeLicense")}
        />
        <label className="form-check-label">Life Time License</label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          onClick={() => setLicenseType((prev) => "annualFees")}
        />
        <label className="form-check-label">Annal Subscription</label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          onClick={() => setLicenseType((prev) => "monthlyFees")}
        />
        <label className="form-check-label">Monthly Subscription</label>
      </div>
    </div>
  );
};

export default AddSoftwareLicenseType;
