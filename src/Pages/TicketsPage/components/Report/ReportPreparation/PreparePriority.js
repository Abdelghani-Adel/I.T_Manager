const PreparePriority = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(`&priority=${e.target.value}`);
  };
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={onChangeHandler}
        defaultValue={"Any Priority"}
      >
        <option value="Any Priority" disabled>
          Any priority
        </option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>
  );
};

export default PreparePriority;
