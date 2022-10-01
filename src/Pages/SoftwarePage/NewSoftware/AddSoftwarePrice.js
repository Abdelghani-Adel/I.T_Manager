import { Fragment } from "react";

const AddSoftwarePrice = (props) => {
  return (
    <Fragment>
      <div className="col-md-3">
        <label className="form-label">Price</label>
        <input type="text" className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Currency</label>
        <input type="text" className="form-control" />
      </div>
    </Fragment>
  );
};

export default AddSoftwarePrice;
