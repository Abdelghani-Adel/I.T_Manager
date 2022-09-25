import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ticketActions } from "../../../Redux/ticketsSlice";
import classes from "./TicketDetails.module.css";
import TicketDetailsActions from "./TicketDetailsActions/TicketDetailsActions";
import TicketChat from "./TicketChat/TicketChat";

const TicketDetails = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const ticketsState = useSelector((state) => state.tickets);
  const ticket = ticketsState.find((ticket) => ticket.id == params.id);

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const ticketDate = new Date(ticket.date);
  const curDate = new Date();
  const ticketAge = Math.round(Math.abs((ticketDate - curDate) / oneDay));

  const assignHandler = () => {
    const action = {
      ...ticket,
      assignedTo: "test",
    };
    dispatch(ticketActions.editTicket(action));
  };

  return (
    <div className={`col-10 col-xl-8 m-auto p-2 mb-2 bg-secondary rounded`}>
      <div className="d-flex rounded p-2 bg-white mb-2 ">
        <div className="w-25">
          <img src={`${ticket.avatar}`} alt="" className={classes.avatar} />
        </div>
        <div className="">
          <p className="fw-bold fs-4 mb-0">{ticket.subject}</p>
          <p className="mb-0 text-muted">
            Reported on {ticket.date} at {ticket.time}{" "}
            <span className="fw-bold">({ticketAge} days ago)</span>
          </p>
          <p className="text-muted">Assigned to : {ticket.assignedTo}</p>
        </div>
      </div>

      <TicketDetailsActions ticket={ticket} />

      <div className="rounded bg-white p-2 mb-2">
        <p>
          <strong>Description: </strong>
          {ticket.description}
        </p>
      </div>

      <TicketChat ticket={ticket} />
    </div>
  );
};

export default TicketDetails;
