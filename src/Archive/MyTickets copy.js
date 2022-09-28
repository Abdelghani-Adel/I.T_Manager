import { useSelector } from "react-redux";
import ProgressBar from "../Components/UI/ProgressBar/ProgressBar";

const MyTickets = (props) => {
  const user = "Hamza"; // consider the current session opened bu Hamza
  const ticketsState = useSelector((state) => state.tickets);
  const myTickets = ticketsState.filter((ticket) => ticket.user == user);
  console.log(myTickets);
  const quantity = 7;
  return (
    <div className="col-lg-5">
      <div className={`p-2 wrapper wrapper--primary`}>
        <div className="d-flex justify-content-between">
          <h3 className="text-secondary">My tickets</h3>
          <p className="fw-bold text-primary fs-4">{quantity}</p>
        </div>

        <ProgressBar title="Low" number={2} width={(2 / quantity) * 100} />
        <ProgressBar title="Medium" number={1} width={(1 / quantity) * 100} />
        <ProgressBar title="High" number={3} width={(3 / quantity) * 100} />
      </div>
    </div>
  );
};

export default MyTickets;
