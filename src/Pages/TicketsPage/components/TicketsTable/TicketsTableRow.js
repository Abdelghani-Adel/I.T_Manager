import { useHistory } from "react-router-dom";

const TicketsTableRow = (props) => {
  const history = useHistory();
  const clickHandler = (e) => {
    history.push(`/tickets/ticket/${e.currentTarget.id}`);
  };

  let statusClass = "";
  if (props.ticket.status === "pending") {
    statusClass = "bg-warning text-white";
  }
  if (props.ticket.status === "opened") {
    statusClass = "bg-primary text-white";
  }
  if (props.ticket.status === "overdue") {
    statusClass = "bg-danger text-white";
  }
  if (props.ticket.status === "solved") {
    statusClass = "bg-success text-white";
  }

  let priorityClass = "";
  if (props.ticket.priority === "High") {
    priorityClass = "bg-danger text-white";
  }
  if (props.ticket.priority === "Medium") {
    priorityClass = "bg-warning text-white";
  }
  if (props.ticket.priority === "Low") {
    priorityClass = "bg-primary text-white";
  }

  return (
    <tr id={props.ticket.id} className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      <td className="d-none d-lg-table-cell">{props.ticket.subject}</td>
      <td>{props.ticket.user}</td>
      <td className="p-1">
        <p className={`m-0 p-1 rounded text-center ${statusClass}`}>
          {props.ticket.status}
        </p>
      </td>
      <td className="p-1">
        <p className={`m-0 p-1 rounded text-center ${priorityClass}`}>
          {props.ticket.priority}
        </p>
      </td>
      <td className="d-none">{props.ticket.assignedto}</td>
    </tr>
  );
};

export default TicketsTableRow;
