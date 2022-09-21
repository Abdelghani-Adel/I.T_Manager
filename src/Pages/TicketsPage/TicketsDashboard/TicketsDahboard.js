import { Fragment } from "react";
import MyTickets from "./MyTickets/MyTickets";
import TicketsSummary from "./TicketsSummary/TicketsSummary";

const TicketsDashboard = (props) => {
  return (
    <Fragment>
      <TicketsSummary className="col-12 my-2" />
      <MyTickets className="col-4" />
    </Fragment>
  );
};

export default TicketsDashboard;
