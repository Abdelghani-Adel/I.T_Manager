import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TicketsTable from "../components/TicketsTable/TicketsTable";

const TicketsByStatus = (props) => {
  const ticketsState = useSelector((state) => state.tickets);
  const params = useParams();
  const tickets = ticketsState.filter(
    (ticket) => ticket.status === params.status
  );
  return (
    <div className={props.className}>
      <h3 className="text-center border border-dark">
        {params.status.toUpperCase()} Tickets
      </h3>
      <TicketsTable tickets={tickets} />
    </div>
  );
};

export default TicketsByStatus;
