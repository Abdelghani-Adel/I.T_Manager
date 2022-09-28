import TicketAssignBtn from "./TicketAssignBtn";
import TicketClose from "./TicketClose";

const TicketDetailsActions = (props) => {
  const addNotehandler = () => {};

  const assignHandler = () => {};

  return (
    <div className="rounded bg-white p-2 mb-2">
      <div className="col">
        <button onClick={addNotehandler} className="btn btn-secondary">
          <i className="bi bi-sticky me-2"> Add Note</i>
        </button>
        <TicketAssignBtn togglePortal={props.togglePortal} />
        <TicketClose ticket={props.ticket} />
      </div>
    </div>
  );
};

export default TicketDetailsActions;
