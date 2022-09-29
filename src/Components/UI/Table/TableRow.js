import { useHistory } from "react-router-dom";

const TableRow = (props) => {
  const history = useHistory();

  const clickHandler = (e) => {
    // history.push(`currentPath/${e.currentTarget.id}`);
    console.log(e.currentTarget.id);
  };

  // [3] colsTitles: [{title: Subject, className: ''}]

  return (
    <tr id={props.object.id} className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      <td>{props.object[`${props.columns[0].title}`]}</td>
      <td>{props.object[`${props.columns[1].title}`]}</td>
      <td>{props.object[`${props.columns[2].title}`]}</td>
      <td>{props.object[`${props.columns[3].title}`]}</td>
    </tr>
  );
};

export default TableRow;
