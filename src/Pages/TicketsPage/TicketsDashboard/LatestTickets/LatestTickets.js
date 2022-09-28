import { useSelector } from "react-redux";
import TicketsTable from "../../components/TicketsTable/TicketsTable";

const LatestTickets = () => {
  const ticketsState = useSelector((state) => state.tickets);

  // Filtering the tickets to get the latest 5 tickets
  const latestTickets = ticketsState.filter(
    (ticket, index) => index >= ticketsState.length - 5
  );

  // Reversing the latest tickets array, to make the latest ticket at top of the table
  const tickets = latestTickets.reverse();

  return (
    <div className="col-lg-6">
      <div className="p-2 wrapper wrapper--primary">
        <h3 className="text-secondary">Latest Tickets</h3>

        <TicketsTable tickets={tickets} />
      </div>
    </div>
  );
};

export default LatestTickets;
