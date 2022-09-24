import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={`${props.className} ${classes.wrapper} mb-lg-2`}>
      <div className="d-flex justify-content-between">
        <p className={classes.title}>{props.title}</p>
        <p className={classes.number}>{props.number}</p>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${props.width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
