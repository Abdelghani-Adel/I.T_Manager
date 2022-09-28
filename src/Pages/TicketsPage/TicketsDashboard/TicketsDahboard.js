import { Fragment } from "react";
import LatestTickets from "./LatestTickets/LatestTickets";
import MyTickets from "./MyTickets/MyTickets";
import TicketsSummary from "./TicketsSummary/TicketsSummary";

const TicketsDashboard = (props) => {
  return (
    <Fragment>
      {/* Direct parent is TicketsPage with 'row' class, giv the parent row 'g-2' class */}
      <TicketsSummary className="col-12" />
      <LatestTickets className="col-8 p-2" />
      <MyTickets className="col-4 p-2" />
    </Fragment>
  );
};

export default TicketsDashboard;
