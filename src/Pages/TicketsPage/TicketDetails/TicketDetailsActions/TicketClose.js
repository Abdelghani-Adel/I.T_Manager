import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ticketActions } from "../../../../Redux/ticketsSlice";

const TicketClose = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const closeHandler = () => {
    const action = {
      ...props.ticket,
      status: "solved",
    };
    dispatch(ticketActions.editTicket(action));
    history.goBack();
  };

  let btnClass = "";
  let btnTitle = "";
  if (props.ticket.status == "solved") {
    btnClass = "success disabled";
    btnTitle = "Ticket is solved";
  } else {
    btnClass = "secondary";
    btnTitle = "Mark as solved";
  }

  return (
    <button onClick={closeHandler} className={`btn btn-${btnClass}`}>
      <i className="bi bi-check-square me-2"> {btnTitle}</i>
    </button>
  );
};

export default TicketClose;
