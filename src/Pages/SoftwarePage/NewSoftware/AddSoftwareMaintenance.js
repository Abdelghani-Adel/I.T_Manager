const AddSoftwareMaintenance = (props) => {
  const blurHandler = (e) => {
    const object = { maintenancePrice: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-6">
      <label className="form-label">Maintenance Price</label>
      <input type="text" className="form-control" onBlur={blurHandler} />
    </div>
  );
};

export default AddSoftwareMaintenance;
