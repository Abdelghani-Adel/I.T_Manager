import { useState } from "react";
import { Link } from "react-router-dom";
import PreparePriority from "./PreparePriority";
import PrepareStatus from "./PrepareStatus";
import PrepareUser from "./PrepareUser";

const ReportPreparation = (props) => {
  const [path, setPath] = useState("/tickets/report?");

  const onChangeHandler = (input) => {
    setPath((previousState) => previousState.concat(input));
  };

  const userChangeHandler = (input) => {
    setPath((previousState) => previousState.concat(`&user=${input}`));
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
        <PrepareUser onChange={onChangeHandler} />
        <PrepareStatus onChange={onChangeHandler} />
        <PreparePriority onChange={onChangeHandler} />

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

export default ReportPreparation;
