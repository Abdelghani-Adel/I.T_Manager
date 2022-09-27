const UploadFile = (props) => {
  return (
    <div className="row mb-2">
      <label htmlFor="" className="col-sm-2 col-form-label">
        Upload File
      </label>
      <div className="col-sm-10">
        <input
          className="form-control"
          type="file"
          placeholder="Describe the problem as much as you can."
        />
      </div>
    </div>
  );
};

export default UploadFile;
