import classes from "./MyTickets.module.css";
import ProgressBar from "../../../../Components/UI/ProgressBar/ProgressBar";

const MyTickets = (props) => {
  const quantity = 7;
  const width = (2 / 3) * 100;
  return (
    <div className="col-lg-5 mb-3 mb-xl-0">
      <div className={`${classes.wrapper} p-2 wrapper wrapper--primary`}>
        <div className="d-flex justify-content-between">
          <h3 className="text-secondary">My opened tickets</h3>
          <p className="fw-bold text-primary fs-4">{quantity}</p>
        </div>

        <ProgressBar title="Medium" number={2} width={(2 / quantity) * 100} />
        <ProgressBar title="Critical" number={1} width={(1 / quantity) * 100} />
        <ProgressBar title="High" number={3} width={(3 / quantity) * 100} />
        <ProgressBar title="Urgent" number={1} width={(1 / quantity) * 100} />
      </div>
    </div>
  );
};

export default MyTickets;
