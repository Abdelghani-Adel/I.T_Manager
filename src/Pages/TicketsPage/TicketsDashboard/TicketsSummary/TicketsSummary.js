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
      <div className="row">
        <TicketsSummaryCard
          className="col-2"
          title="Pending Tickets"
          tickets={pending}
          path="pending"
        />
        <TicketsSummaryCard
          className="col-2"
          title="Opened Tickets"
          tickets={opened}
          path="opened"
        />
        <TicketsSummaryCard
          className="col-2"
          title="Overdue Tickets"
          tickets={overdue}
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
