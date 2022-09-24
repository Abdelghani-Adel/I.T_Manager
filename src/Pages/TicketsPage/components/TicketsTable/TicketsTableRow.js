import { useHistory } from "react-router-dom";

const TicketsTableRow = (props) => {
  const history = useHistory();
  const clickHandler = (e) => {
    history.push(`/tickets/ticket/${e.currentTarget.id}`);
  };
  return (
    <tr id={props.ticket.id} className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      <td className="d-none d-lg-table-cell">{props.ticket.subject}</td>
      <td>{props.ticket.user}</td>
      <td>{props.ticket.status}</td>
      <td>{props.ticket.priority}</td>
      <td className="d-none">{props.ticket.assignedto}</td>
    </tr>
  );
};

export default TicketsTableRow;
