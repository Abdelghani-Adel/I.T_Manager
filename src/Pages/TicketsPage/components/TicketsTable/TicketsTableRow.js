const TicketsTableRow = (props) => {
  return (
    <tr id={props.ticket.id} className="cursor--pointer">
      <th scope="row">{props.index + 1}</th>
      <td>{props.ticket.subject}</td>
      <td>{props.ticket.user}</td>
      <td>{props.ticket.status}</td>
      <td>{props.ticket.priority}</td>
      <td>{props.ticket.assignedto}</td>
    </tr>
  );
};

export default TicketsTableRow;
