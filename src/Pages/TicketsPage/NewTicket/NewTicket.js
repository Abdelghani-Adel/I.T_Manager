import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ticketActions } from "../../../Redux/ticketsSlice";
import DepartementInput from "./DepartementInput";
import DescriptionInput from "./DescriptionInput";
import NameInput from "./NameInput";
import SubjectInput from "./SubjectInput";
import SubmitAction from "./SubmitAction";
import NewTicketHeader from "./NewTicketHeader";
import UploadFile from "./UploadFile";

const NewTicket = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Converting the Date object into timestamp to avoid storing non-serializiable data.
  const today = new Date().getTime();

  const [ticketObject, setTicketObject] = useState({
    id: `${Math.random()}`,
    user: "",
    date: today,
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

  // Function to update the state, will be given to the child input components as a prop.
  // The input argument is a object contains just 1 prop which will overrides the matching prop in the ticketObject state.
  const onChangeHandler = (input) => {
    setTicketObject((previousState) => ({ ...previousState, ...input }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(ticketActions.addTicket(ticketObject));

    history.push("/tickets");
  };

  return (
    <div className="col-10 col-xl-8 col-xxl-6 m-auto p-2 mb-2 bg-secondary rounded">
      <NewTicketHeader />
      <form className="bg-white p-2 rounded" onSubmit={submitHandler}>
        <NameInput onChange={onChangeHandler} />
        <DepartementInput onChange={onChangeHandler} />
        <SubjectInput onChange={onChangeHandler} />
        <DescriptionInput onChange={onChangeHandler} />
        <UploadFile />
        <SubmitAction />
      </form>
    </div>
  );
};

export default NewTicket;
