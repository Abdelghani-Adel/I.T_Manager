import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ticketActions } from "../../../Redux/slices/ticketsSlice";

const TicketAssign = (props) => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const ITUsers = usersState.filter(
    (user) => user.departement === "Information Technology"
  );

  const assignHandler = (e) => {
    const action = {
      ...props.ticket,
      assignedTo: e.target.value,
    };
    dispatch(ticketActions.editTicket(action));
  };
  return (
    <div className="input-group d-flex align-items-center">
      <p className="text-muted m-0 w-25">Assigned To: </p>
      <select
        className="form-select form-select-sm rounded"
        defaultValue={props.ticket.assignedTo}
        onChange={assignHandler}
      >
        <option>Current: {props.ticket.assignedTo}</option>
        {ITUsers.map((user) => (
          <option key={Math.random()} value={user.fullName}>
            {user.fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TicketAssign;
