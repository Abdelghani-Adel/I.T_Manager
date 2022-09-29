/*
Needed Props: -
[1] dataArray: 
[2] dataTitle:
[3] colsTitles: [{title: Subject, className: ''}]

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
        <table className="table-hover table-bordered order">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
              {props.colsTitles.map((column) => (
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
                colsTitles={props.colsTitles}
              />
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default Table;
