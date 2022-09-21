import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./TicketDetails.module.css";

const TicketDetails = (props) => {
  const params = useParams();
  const ticketsState = useSelector((state) => state.tickets);
  const ticket = ticketsState.find((ticket) => ticket.id == params.id);

  return (
    <div className={`${classes.container} col-10 m-auto p-4`}>
      <div className="row bg-white mb-2">
        <div className="col-1 text-center d-flex align-items-center">
          <img src={`${ticket.avatar}`} alt="" className={classes.avatar} />
        </div>
        <div className="col-11">
          <p className="fw-bold fs-4 mb-0">{ticket.subject}</p>
          <p className="mb-0 text-muted">
            Reported on {ticket.date} at {ticket.time}
          </p>
          <p className="text-muted">Assigned to : {ticket.assignedTo}</p>
        </div>
      </div>

      <div className="row bg-white p-2">
        <div className="col">
          <button>
            <i className="bi bi-reply me-2">Reply</i>
          </button>
          <button>
            <i className="bi bi-forward me-2">Forward</i>
          </button>
          <button>
            <i className="bi bi-sticky me-2">Add Note</i>
          </button>
          <button>
            <i className="bi bi-chat me-2">Discuss</i>
          </button>
          <button>
            <i className="bi bi-x-square me-2">Close ticket</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
