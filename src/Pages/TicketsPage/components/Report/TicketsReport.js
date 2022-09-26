import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TicketsTable from "../TicketsTable/TicketsTable";

const TicketsReport = (props) => {
  const ticketsState = useSelector((state) => state.tickets);
  let filteredTickets = ticketsState;
  const params = useParams();

  filteredTickets = filteredTickets.filter(
    (ticket) => ticket.status === params.status
  );
  filteredTickets = filteredTickets.filter(
    (ticket) => ticket.priority === params.priority
  );
  filteredTickets = filteredTickets.filter(
    (ticket) => ticket.user === params.user
  );

  return (
    <div>
      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default TicketsReport;
