import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ticketActions } from "../../../Redux/ticketsSlice";
import DepartementInput from "./DepartementInput";
import DescriptionInput from "./DescriptionInput";
import NameInput from "./NameInput";
import SubjectInput from "./SubjectInput";
import SubmitAction from "./SubmitAction";
import TicketHeader from "./TicketHeader";
import UploadFile from "./UploadFile";

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
      <TicketHeader />
      <form className="bg-white p-2 rounded">
        <NameInput />
        <DepartementInput onChange={onChangeHandler} />
        <SubjectInput onChange={onChangeHandler} />
        <DescriptionInput onChange={onChangeHandler} />
        <UploadFile />
        <SubmitAction submit={submitHandler} />
      </form>
    </div>
  );
};

export default NewTicket;
