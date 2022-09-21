import TicketsPageRoutes from "./TicketsRoutes";

const TicketsPage = (props) => {
  return (
    // START FIXED CONTENT
    <div className="row">
      <h2 className="my-2">Tickets</h2>
      <div className="actions my-2">
        <button className="btn btn-primary" role="button">
          New Ticket
        </button>
      </div>
      {/* END FIXED CONTENT */}

      {/* 
        // Default route is '/tickets/dashboard'
        // Default route component is <TicketsDashboard />
      */}

      <TicketsPageRoutes routes={props.routes} />
    </div>
  );
};

export default TicketsPage;
