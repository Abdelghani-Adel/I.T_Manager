import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TicketsTable from "../TicketsTable/TicketsTable";

const TicketsReport = (props) => {
  const ticketsState = useSelector((state) => state.tickets);
  let filteredTickets = ticketsState;
  const params = useParams();

  if (params.status !== "All") {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.status === params.status
    );
  }

  if (params.priority !== "All") {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.priority === params.priority
    );
  }

  if (params.user !== "All") {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.user === params.user
    );
  }

  return (
    <div>
      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default TicketsReport;
