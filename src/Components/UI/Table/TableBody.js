import TableRow from "./TableRow";

const TableBody = (props) => {
  return (
    <tbody>
      {props.dataArray.map((object, index) => (
        <TableRow
          key={object.id}
          object={object}
          index={index}
          columns={props.columns}
          basePath={props.basePath}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
