import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TicketsTable from "../TicketsTable/TicketsTable";

const TicketsReport = (props) => {
  const location = useLocation();

  const ticketsState = useSelector((state) => state.tickets);
  let filteredTickets = ticketsState;
  const params = new URLSearchParams(location.search);

  const user = params.get("user");
  const status = params.get("status");
  const priority = params.get("priority");

  if (user !== "All" && user) {
    filteredTickets = filteredTickets.filter((ticket) => ticket.user === user);
  }

  if (status !== "All" && status) {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.status === status
    );
  }

  if (priority !== "All" && priority) {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.priority === priority
    );
  }

  return (
    <div>
      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default TicketsReport;
