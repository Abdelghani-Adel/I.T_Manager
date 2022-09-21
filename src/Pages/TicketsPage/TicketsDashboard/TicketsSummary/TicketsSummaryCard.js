import { useHistory } from "react-router-dom";
import classes from "./TicketsSummaryCard.module.css";

const TicketsSummaryCard = (props) => {
  const history = useHistory();
  const clickHandler = (e) => {
    history.push(`/tickets/${props.path}`);
  };
  return (
    <div className={`${props.className} `} onClick={clickHandler}>
      <div className="wrapper cursor--pointer hover-scale--1 p-2">
        <h6 className="fs-6 fw-bold text-secondary">{props.title}</h6>
        <p className="fs-2 m-0 fw-bold text-primary">{props.tickets.length}</p>
      </div>
    </div>
  );
};

export default TicketsSummaryCard;
