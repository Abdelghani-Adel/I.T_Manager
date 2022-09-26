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

  return (
    <button onClick={closeHandler}>
      <i className="bi bi-x-square me-2"> Mark as solved</i>
    </button>
  );
};

export default TicketClose;
