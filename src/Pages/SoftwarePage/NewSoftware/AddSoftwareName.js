const AddSoftwareName = (props) => {
  const onBlurHandler = (e) => {
    const object = { name: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-6">
      <label className="form-label">Software Name</label>
      <input type="text" className="form-control" onBlur={onBlurHandler} />
    </div>
  );
};

export default AddSoftwareName;
