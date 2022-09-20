import TicketsSummaryCard from "../TicketsSummaryCard";

const TicketsSummary = (props) => {
  return (
    <div className={props.className}>
      <div className="row">
        <TicketsSummaryCard
          className="col-2"
          title="Pending Tickets"
          tickets={[]}
          path="pending"
        />
        <TicketsSummaryCard
          className="col-2"
          title="Opened Tickets"
          tickets={[]}
          path="opened"
        />
        <TicketsSummaryCard
          className="col-2"
          title="Overdue Tickets"
          tickets={[]}
          path="overdue"
        />
        <TicketsSummaryCard
          className="col-2"
          title="Escalations"
          tickets={[]}
          path="escalations"
        />
      </div>
    </div>
  );
};

export default TicketsSummary;
