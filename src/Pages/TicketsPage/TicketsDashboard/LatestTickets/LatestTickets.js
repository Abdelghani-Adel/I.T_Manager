import { useSelector } from "react-redux";
import TicketsTable from "../../../../Components/TicketsTable/TicketsTable";

const LatestTickets = (props) => {
  const ticketsState = useSelector((state) => state.tickets);
  const tickets = ticketsState.filter((ticket, index) => index < 5);

  return (
    <div className={props.className}>
      <div className="p-2 wrapper">
        <h3 className="text-secondary">Latest Tickets</h3>

        <TicketsTable tickets={tickets} />
      </div>
    </div>
  );
};

export default LatestTickets;
