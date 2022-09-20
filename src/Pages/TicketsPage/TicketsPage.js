import MyTickets from "./TicketsDashboard/MyTickets/MyTickets";
import TicketsSummary from "./TicketsDashboard/TicketsSummary/TicketsSummary";

const TicketsPage = (props) => {
  return (
    <div className="row">
      <h2 className="my-2">Tickets</h2>
      <div className="actions my-2">
        <button className="btn btn-primary" role="button">
          New Ticket
        </button>
      </div>

      <TicketsSummary className="col-12 my-2" />
      <MyTickets className="col-4" />
    </div>
  );
};

export default TicketsPage;
