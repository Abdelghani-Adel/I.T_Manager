import { useState } from "react";
import { useDispatch } from "react-redux";
import TicketIcon from "../../../Assets/Images/ticketicon.png";
import { ticketActions } from "../../../Redux/ticketsSlice";

const NewTicket = (props) => {
  const dispatch = useDispatch();
  const [ticketObject, setTicketObject] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    // prepare the ticket object
    const ticketObj = {
      id: 13,
      time: "",
      date: "",
      subject: "",
      departement: "",
      description: "",
      avatar: "",
      status: "pending",
      priority: "",
      assignedTo: "",
      chat: [],
    };

    // dispatch the object
    dispatch(ticketActions.addTicket(ticketObject));
  };

  return (
    <div className="col-10 col-xl-6 m-auto p-2 mb-2 bg-secondary rounded">
      <div className="header rounded p-2 mb-2 bg-white text-center">
        <h2>IT Service Ticket Form</h2>
        <p>Please provide the details of the problem</p>
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
              class="form-control"
              type="text"
              value="Abdelghani"
              readonly
              disabled
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Subject
          </label>
          <div className="col-sm-10">
            <input
              class="form-control"
              type="text"
              placeholder="Enter the subject"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Department
          </label>
          <div className="col-sm-10">
            <select
              class="form-select"
              type="text"
              defaultValue={"Choose your departement"}
            >
              <option value="Choose your departement" disabled>
                Choose your departemet
              </option>
              <option value="Accounting">Accounting</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Eng Office">Eng Office</option>
              <option value="Front Office">Front Office</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Computer ID
          </label>
          <div className="col-sm-10">
            <input
              class="form-control"
              type="text"
              placeholder="Enter your computer ID 'Labled on your device'"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              class="form-control"
              type="text"
              placeholder="Describe the problem as much as you can."
            />
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Upload File
          </label>
          <div className="col-sm-10">
            <input
              class="form-control"
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
