import { useState } from "react";

const AddSoftwareLicenseType = (props) => {
  const onChangeHandler = (e) => {
    const object = { licenseType: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-12">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="lifeTime"
          // checked={licenseType === "lifeTimeLicense"}
          onChange={onChangeHandler}
        />
        <label className="form-check-label">Life Time License</label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="annual"
          onChange={onChangeHandler}
        />
        <label className="form-check-label">Annal Subscription</label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="monthly"
          onChange={onChangeHandler}
        />
        <label className="form-check-label">Monthly Subscription</label>
      </div>
    </div>
  );
};

export default AddSoftwareLicenseType;
