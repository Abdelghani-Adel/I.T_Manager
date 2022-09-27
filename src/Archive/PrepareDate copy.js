import classes from "./PrepareDate.module.css";

const PrepareDate = (props) => {
  return (
    <form autocomplete="off">
      <div className="flex-row d-flex justify-content-center">
        <div className="col-lg-6 col-11 px-1">
          <div className="input-group input-daterange">
            <input
              type="text"
              id="start"
              className={`form-control text-left mr-2 ${classes.input} ${classes.formControl}`}
            />
            <label
              className={`ml-3 ${classes.formControlPlaceholder} ${classes.startp}`}
              id="start-p"
            >
              Start Date
            </label>
            <span
              className={`bi bi-calender ${classes.icon} ${classes.bi1}`}
              id="bi-1"
            ></span>
            <input
              type="text"
              id="end"
              className={`form-control text-left mr-2 ${classes.input} ${classes.formControl}`}
            />
            <label
              className={`ml-3 ${classes.formControlPlaceholder} ${classes.endp}`}
              id="end-p"
            >
              End Date
            </label>
            <span
              className={`bi bi-calender ${classes.icon} ${classes.bi2}`}
              id="bi-2"
            ></span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PrepareDate;
