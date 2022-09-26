import { useState } from "react";
import { Link } from "react-router-dom";

const ReportCustom = (props) => {
  const [path, setPath] = useState("/tickets/report?");

  const userChangeHandler = (e) => {
    setPath((previousState) => previousState.concat(`&user=${e.target.value}`));
  };
  const statusChangeHandler = (e) => {
    setPath((previousState) =>
      previousState.concat(`&status=${e.target.value}`)
    );
  };
  const priorityChangeHandler = (e) => {
    setPath((previousState) =>
      previousState.concat(`&priority=${e.target.value}`)
    );
  };

  return (
    <div className="modal-overlay w-25 ">
      <div className="bg-white p-2 rounded">
        <h3 className="mb-3 text-center text-secondary">
          Customize your report
        </h3>
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={userChangeHandler}
            defaultValue={"All Users"}
          >
            <option value="All Users" disabled>
              All Users
            </option>
            <option>Eslam</option>
            <option>Hamza</option>
            <option>Hossam</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={statusChangeHandler}
            defaultValue={"Any Status"}
          >
            <option value="Any Status" disabled>
              Any Status
            </option>
            <option>pending</option>
            <option>opened</option>
            <option>solved</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={priorityChangeHandler}
            defaultValue={"Any Priority"}
          >
            <option value="Any Priority" disabled>
              Any Priority
            </option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <Link
          to={path}
          className="btn btn-success"
          onClick={props.onClosePortal}
        >
          Generate Report
        </Link>
      </div>
    </div>
  );
};

export default ReportCustom;
