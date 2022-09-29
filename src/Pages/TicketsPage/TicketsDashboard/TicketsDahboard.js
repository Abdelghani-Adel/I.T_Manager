import { Fragment } from "react";
import LatestTickets from "./LatestTickets/LatestTickets";
import MyTickets from "./MyTickets/MyTickets";
import TicketsSummary from "./TicketsSummary/TicketsSummary";

const TicketsDashboard = (props) => {
  return (
    <Fragment>
      {/* Direct parent is TicketsPage with 'row' class, giv the parent row 'g-2' class */}
      <TicketsSummary />
      <LatestTickets />
      <MyTickets />
    </Fragment>
  );
};

export default TicketsDashboard;
