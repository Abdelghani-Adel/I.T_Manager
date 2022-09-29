import { useHistory, useLocation } from "react-router-dom";

const TableRow = (props) => {
  const history = useHistory();

  const clickHandler = (e) => {
    history.push(`${props.basePath}/${e.currentTarget.id}`);
  };

  return (
    <tr id={props.object.id} className="cursor--pointer" onClick={clickHandler}>
      <th scope="row">{props.index + 1}</th>
      {props.columns.map((column) => (
        <td key={column.id}>{props.object[`${column.title}`]}</td>
      ))}

      {/* <td>{props.object[`${props.columns[0].title}`]}</td>
      <td>{props.object[`${props.columns[1].title}`]}</td>
      <td>{props.object[`${props.columns[2].title}`]}</td>
      <td>{props.object[`${props.columns[3].title}`]}</td>
      <td>{props.object[`${props.columns[4].title}`]}</td> */}
    </tr>
  );
};

export default TableRow;

// props.object.subject => this method is not dynamically, will struggle to
// I need to select the object property based on the column index
/*
    Example of columns
    props.columns = [
      { title: "subject", className: "", id: 1 },
      { title: "user", className: "", id: 2 },
      { title: "status", className: "", id: 3 },
      { title: "priority", className: "", id: 4 },
    ] 

    'props.columns[0].title' => 'subject'
    'props.columns[1].title' => 'user'
    'props.columns[2].title' => 'status'
    'props.columns[3].title' => 'priority'
    props.object['subject']

    So, I combinde these steps into one line
    props.object[`${props.column[0].title}]
    Now, you can manipulate the table easily from the columns array you pass to the Table component
    
  */

/*
  <tr id={props.object.id} className="cursor--pointer" onClick={clickHandler}>
    <th scope="row">{props.index + 1}</th>
    <td>{props.object[`${props.columns[0].title}`]}</td>
    <td>{props.object[`${props.columns[1].title}`]}</td>
    <td>{props.object[`${props.columns[2].title}`]}</td>
    <td>{props.object[`${props.columns[3].title}`]}</td>
    <td>{props.object[`${props.columns[4].title}`]}</td>
  </tr>
*/
