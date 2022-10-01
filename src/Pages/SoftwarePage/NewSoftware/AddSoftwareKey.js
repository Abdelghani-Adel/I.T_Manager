const AddSoftwareKey = (props) => {
  const blurHandler = (e) => {
    const object = { licenseKey: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-12">
      <label className="form-label">License Key</label>
      <input type="text" className="form-control" onBlur={blurHandler} />
    </div>
  );
};

export default AddSoftwareKey;
