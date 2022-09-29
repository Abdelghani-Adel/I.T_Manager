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
  const solved = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.status === "solved")
  );

  return (
    <div className="col-12">
      <div className="row g-2 row-cols-1 row-cols-md-5">
        <TicketsSummaryCard
          title="Pending Tickets"
          tickets={pending}
          path="pending"
        />
        <TicketsSummaryCard
          title="Opened Tickets"
          tickets={opened}
          path="opened"
        />
        <TicketsSummaryCard
          title="Overdue Tickets"
          tickets={overdue}
          path="overdue"
        />
        <TicketsSummaryCard
          title="Solved this month"
          tickets={solved}
          path="solved"
        />
        <TicketsSummaryCard
          title="Escalations"
          tickets={[]}
          path="escalations"
        />
      </div>
    </div>
  );
};

export default TicketsSummary;
