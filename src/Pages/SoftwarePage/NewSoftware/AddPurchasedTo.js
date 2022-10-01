const AddPurchasedTo = (props) => {
  const blurHandler = (e) => {
    const object = { purchasedTo: e.target.value };
    props.updateSoftwareObj(object);
  };
  return (
    <div className="col-md-6">
      <label className="form-label">Purchased To</label>
      <input type="text" className="form-control" onBlur={blurHandler} />
    </div>
  );
};

export default AddPurchasedTo;
