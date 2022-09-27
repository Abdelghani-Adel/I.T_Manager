const PrepareUser = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(`&user=${e.target.value}`);
  };
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={onChangeHandler}
        defaultValue={"All Users"}
      >
        <option value="All Users" disabled>
          All Users
        </option>
        <option>Eslam</option>
        <option>Hamza</option>
        <option>Hossam</option>
      </select>
    </div>
  );
};

export default PrepareUser;
