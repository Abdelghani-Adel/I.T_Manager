const AddSoftwareRenew = (props) => {
  return (
    <div className="col-md-6">
      <label className="form-label">Renew Price</label>
      <input
        type="text"
        className="form-control"
        disabled={props.licenseType === "lifeTimeLicense"}
      />
    </div>
  );
};

export default AddSoftwareRenew;
