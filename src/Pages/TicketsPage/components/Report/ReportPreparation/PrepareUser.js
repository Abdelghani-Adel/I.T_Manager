import { useSelector } from "react-redux";

const PrepareUser = (props) => {
  const users = useSelector((state) => state.users);

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

        {users.map((user) => (
          <option>{user.firstName}</option>
        ))}
      </select>
    </div>
  );
};

export default PrepareUser;
