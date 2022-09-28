import TicketIcon from "../../../Assets/Images/ticketicon.png";

const NewTicketHeader = (props) => {
  return (
    <div className="header rounded p-2 mb-2 bg-white text-center">
      <h2>IT Service Ticket</h2>
      <p>
        Please provide the details of the problem, and we will do our best to
        solve it.
      </p>
      <img src={TicketIcon} alt="" />
      <hr />
    </div>
  );
};

export default NewTicketHeader;
