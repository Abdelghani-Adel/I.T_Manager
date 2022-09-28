import { useSelector } from "react-redux";
import TicketsTable from "../../components/TicketsTable/TicketsTable";

const MyTickets = (props) => {
  const user = "Hamza"; // consider the current session opened bu Hamza
  const ticketsState = useSelector((state) => state.tickets);

  // Check ticket.user in case the user is an employee
  // Check ticket.assignedTo in case the user is an I.T Employee
  const myTickets = ticketsState.filter(
    (ticket) => ticket.user == user || ticket.assignedTo == user
  );

  return (
    <div className="col-lg-6">
      <div className="p-2 wrapper wrapper--primary">
        <div className="d-flex justify-content-between">
          <h3 className="text-secondary">My tickets</h3>
          <p className="fw-bold text-primary fs-4 mb-0">{myTickets.length}</p>
        </div>

        <TicketsTable tickets={myTickets} />
      </div>
    </div>
  );
};

export default MyTickets;
