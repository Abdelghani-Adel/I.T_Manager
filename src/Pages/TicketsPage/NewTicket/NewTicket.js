import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TicketIcon from "../../../Assets/Images/ticketicon.png";
import { ticketActions } from "../../../Redux/ticketsSlice";
import DepartementInput from "./DepartementInput";

const NewTicket = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ticketObject, setTicketObject] = useState({
    id: "",
    user: "",
    date: "",
    subject: "",
    departement: "",
    description: "",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "Medium",
    assignedTo: "",
    chat: [],
  });

  // Using the length of tickets array to determine the new ID for the new ticket. tickets.length + 1
  // const tickets = useSelector((state) => state.tickets);

  // Function to update the state, will be given to the child input components as a prop.
  // the input argument is a object contains just 1 prop which will overrides the prop in the ticketObject state.
  const onChangeHandler = (input) => {
    setTicketObject((previousState) => ({ ...previousState, ...input }));
  };

  //
  const submitHandler = (e) => {
    e.preventDefault();

    // prepare the ticket object

    // dispatch the object
    dispatch(ticketActions.addTicket(ticketObject));

    // navigate away
    history.push("/tickets");
  };

  return (
    <div className="col-10 col-xl-8 col-xxl-6 m-auto p-2 mb-2 bg-secondary rounded">
      <div className="header rounded p-2 mb-2 bg-white text-center">
        <h2>IT Service Ticket</h2>
        <p>
          Please provide the details of the problem, and we will do our best to
          solve it.
        </p>
        <img src={TicketIcon} alt="" />
        <hr />
      </div>

      <form action="" className="bg-white p-2 rounded">
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Your Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value="Abdelghani"
              readOnly
              disabled
            />
          </div>
        </div>
        <DepartementInput onChange={onChangeHandler} />
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Subject
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              placeholder="Enter the subject"
            />
          </div>
        </div>

        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              type="text"
              placeholder="Describe your problem."
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Upload File
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="file"
              placeholder="Describe the problem as much as you can."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3 ms-auto p-2">
            <button
              className="btn btn-success w-100"
              role="submit"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
