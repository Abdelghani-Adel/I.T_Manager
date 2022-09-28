import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TicketsTable from "../TicketsTable/TicketsTable";

const TicketsReport = (props) => {
  const location = useLocation();

  const ticketsState = useSelector((state) => state.tickets);
  let filteredTickets = ticketsState;
  const params = new URLSearchParams(location.search);

  const user = params.get("user");
  const status = params.get("status");
  const priority = params.get("priority");
  const assignedTo = params.get("assignedTo");
  const startDate = params.get("from");
  const endDate = params.get("to");

  if (user !== "All" && user) {
    filteredTickets = filteredTickets.filter((ticket) => ticket.user === user);
  }

  if (status !== "All" && status) {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.status === status
    );
  }

  if (priority !== "All" && priority) {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.priority === priority
    );
  }

  if (assignedTo !== "All" && assignedTo) {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.assignedTo === assignedTo
    );
  }

  if (startDate) {
    filteredTickets = filteredTickets.filter((ticket) => {
      // Formatting the ticket date so I can compare it to the startDate
      // startDate is formatted with the same method toLocaleString().
      const ticketDate = new Date(ticket.date).toLocaleDateString();
      return ticketDate >= startDate;
    });
  }

  return (
    <div>
      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default TicketsReport;
