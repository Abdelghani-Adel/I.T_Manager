const PrepareStatus = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(`&status=${e.target.value}`);
  };
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={onChangeHandler}
        defaultValue={"Any Status"}
      >
        <option value="Any Status" disabled>
          Any Status
        </option>
        <option>pending</option>
        <option>opened</option>
        <option>overdue</option>
        <option>solved</option>
      </select>
    </div>
  );
};

export default PrepareStatus;
