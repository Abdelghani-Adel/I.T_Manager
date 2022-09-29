import { useHistory } from "react-router-dom";

const TableRow = (props) => {
  const history = useHistory();

  const clickHandler = (e) => {
    // history.push(`currentPath/${e.currentTarget.id}`);
    console.log(e.currentTarget.id);
  };

  return (
    <tr id={props.ticket.id} className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      <td className={props.className}>{}</td>
    </tr>
  );
};

export default TableRow;
