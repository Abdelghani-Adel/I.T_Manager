import MyTickets from "./TicketsDashboard/MyTickets/MyTickets";
import TicketsDashboard from "./TicketsDashboard/TicketsDahboard";
import TicketsSummary from "./TicketsDashboard/TicketsSummary/TicketsSummary";
import TicketsPageRoutes from "./TicketsRoutes";

const TicketsPage = (props) => {
  return (
    <div className="row">
      <h2 className="my-2">Tickets</h2>
      <div className="actions my-2">
        <button className="btn btn-primary" role="button">
          New Ticket
        </button>
      </div>
      <TicketsPageRoutes routes={props.routes} />
    </div>
  );
};

export default TicketsPage;
