const TicketDescription = (props) => {
  return (
    <div className="rounded bg-white p-2 mb-2">
      <p>
        <strong>Description: </strong>
        {props.ticket.description}
      </p>
    </div>
  );
};

export default TicketDescription;
