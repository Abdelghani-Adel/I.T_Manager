import TicketAssign from "./TicketAssign";
import classes from "./TicketDetails.module.css";

const TicketHeader = (props) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const ticketDate = new Date(props.ticket.date);
  const curDate = new Date();
  const ticketAge = Math.round(Math.abs((ticketDate - curDate) / oneDay));

  return (
    <div className="d-flex rounded p-2 bg-white mb-2 ">
      <div className="w-25">
        <img src={`${props.ticket.avatar}`} alt="" className={classes.avatar} />
      </div>
      <div className="w-75">
        <p className="fw-bold fs-4 mb-0">{props.ticket.subject}</p>
        <p className="mb-0 text-muted">
          Reported on {ticketDate.toLocaleDateString()} at{" "}
          {ticketDate.toLocaleTimeString()}{" "}
          <span className="fw-bold">({ticketAge} days ago)</span>
        </p>
        <TicketAssign ticket={props.ticket} />
      </div>
    </div>
  );
};

export default TicketHeader;
