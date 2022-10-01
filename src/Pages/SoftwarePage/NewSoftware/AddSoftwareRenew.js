const AddSoftwareRenew = (props) => {
  const blurHandler = (e) => {
    const object = { renewPrice: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-6">
      <label className="form-label">Renew Price</label>
      <input
        type="text"
        className="form-control"
        disabled={props.softwareObject.licenseType === "lifeTime"}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default AddSoftwareRenew;
