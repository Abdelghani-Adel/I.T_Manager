import TicketsSummaryCard from "./TicketsSummaryCard";
import { useSelector } from "react-redux";

const TicketsSummary = (props) => {
  const pending = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.status === "pending")
  );
  const opened = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.status === "opened")
  );
  const overdue = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.status === "overdue")
  );

  return (
    <div className={props.className}>
      <div className="row row-cols-1 row-cols-md-4">
        <TicketsSummaryCard
          className="mb-3 mb-md-0"
          title="Pending Tickets"
          tickets={pending}
          path="pending"
        />
        <TicketsSummaryCard
          className="mb-3 mb-md-0"
          title="Opened Tickets"
          tickets={opened}
          path="opened"
        />
        <TicketsSummaryCard
          className="mb-3 mb-md-0"
          title="Overdue Tickets"
          tickets={overdue}
          path="overdue"
        />
        <TicketsSummaryCard
          className="mb-3 mb-md-0"
          title="Escalations"
          tickets={[]}
          path="escalations"
        />
      </div>
    </div>
  );
};

export default TicketsSummary;
