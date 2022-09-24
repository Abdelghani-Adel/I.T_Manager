import TicketsTableRow from "./TicketsTableRow";

const TicketsTable = (props) => {
  return (
    <table className="table table-hover table-bordered border">
      <thead className="table-secondary">
        <tr>
          <th scope="col">#</th>
          <th scope="col" className="d-none d-lg-table-cell">
            Subject
          </th>
          <th scope="col">User</th>
          <th scope="col">Status</th>
          <th scope="col">Priority</th>
          <th scope="col" className="d-none">
            Assigned to
          </th>
        </tr>
      </thead>

      <tbody>
        {props.tickets.map((ticket, index) => (
          <TicketsTableRow key={ticket.id} ticket={ticket} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TicketsTable;
