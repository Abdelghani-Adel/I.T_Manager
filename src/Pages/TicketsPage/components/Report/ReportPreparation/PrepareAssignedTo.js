import { useSelector } from "react-redux";

const PrepareAssignedTo = (props) => {
  const users = useSelector((state) => state.users);
  const ITUsers = users.filter(
    (user) => user.departement === "Information Technology"
  );

  const onChangeHandler = (e) => {
    props.onChange(`&assignedTo=${e.target.value}`);
  };

  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        onChange={onChangeHandler}
        defaultValue={"All I.T Users"}
      >
        <option value="All I.T Users" disabled>
          All I.T Users
        </option>

        {ITUsers.map((user) => (
          <option key={Math.random()}>{user.fullName}</option>
        ))}
      </select>
    </div>
  );
};

export default PrepareAssignedTo;
