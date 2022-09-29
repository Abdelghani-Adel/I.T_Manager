/*
Needed Props: -
[1] dataArray = [{}, {}, {}, {}]
[2] dataTitle = 'Title'
[3] columns = [{title: 'Subject', className: ''}, {title: 'statue', className: ''}]

*/

import { Fragment } from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  const hasData = props.dataArray.length > 0;

  return (
    <Fragment>
      {!hasData && (
        <h3 className="text-center fw-bold text-danger">
          No {props.dataTitle} Found!
        </h3>
      )}

      {hasData && (
        <table className="table table-hover table-bordered border">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
              {props.columns.map((column) => (
                <th key={column.id} className={column.className}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {props.dataArray.map((object, index) => (
              <TableRow
                key={object.id}
                object={object}
                index={index}
                columns={props.columns}
              />
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default Table;
