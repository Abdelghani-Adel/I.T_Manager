const AddSoftwareWebsite = (props) => {
  const onBlurHandler = (e) => {
    const object = { website: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-6 ">
      <label className="form-label">Software website</label>
      <div className="input-group">
        <span className="input-group-text">https://www.</span>
        <input type="text" className="form-control" onBlur={onBlurHandler} />
      </div>
    </div>
  );
};

export default AddSoftwareWebsite;
