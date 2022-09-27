const NameInput = (props) => {
  return (
    <div className="row mb-2">
      <label htmlFor="" className="col-sm-2 col-form-label">
        Your Name
      </label>
      <div className="col-sm-10">
        <input
          className="form-control"
          type="text"
          value="Abdelghani"
          readOnly
          disabled
        />
      </div>
    </div>
  );
};

export default NameInput;
