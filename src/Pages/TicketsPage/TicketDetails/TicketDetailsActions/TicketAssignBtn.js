const TicketAssignBtn = (props) => {
  return (
    <button onClick={props.togglePortal} className="btn btn-secondary">
      <i className="bi bi-check-square me-2"> Assign To</i>
    </button>
  );
};

export default TicketAssignBtn;
