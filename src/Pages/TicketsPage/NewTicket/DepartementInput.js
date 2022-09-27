const DepartementInput = (props) => {
  const onChangeHandler = (e) => {
    const deptObj = { departement: e.target.value };
    props.onChange(deptObj);
  };

  return (
    <div className="row mb-2">
      <label htmlFor="" className="col-sm-2 col-form-label">
        Department
      </label>
      <div className="col-sm-10">
        <select
          className="form-select"
          type="text"
          defaultValue={"Choose your departement"}
          onChange={onChangeHandler}
        >
          <option value="Choose your departement" disabled>
            Choose your departemet
          </option>
          <option value="Accounting">Accounting</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Eng Office">Eng Office</option>
          <option value="Front Office">Front Office</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>
    </div>
  );
};

export default DepartementInput;
