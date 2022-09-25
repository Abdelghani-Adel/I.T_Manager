import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ticketActions } from "../../../../Redux/ticketsSlice";
import TicketClose from "./TicketClose";

const TicketDetailsActions = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addNotehandler = () => {};

  const assignHandler = () => {};

  const closeHandler = () => {
    const action = {
      ...props.ticket,
      status: "closed",
    };
    dispatch(ticketActions.editTicket(action));
    history.goBack();
  };

  return (
    <div className="rounded bg-white p-2 mb-2">
      <div className="col">
        <button onClick={addNotehandler}>
          <i className="bi bi-sticky me-2"> Add Note</i>
        </button>
        <button onClick={assignHandler}>
          <i className="bi bi-chat me-2"> Assign to</i>
        </button>
        <TicketClose ticket={props.ticket} />
      </div>
    </div>
  );
};

export default TicketDetailsActions;
