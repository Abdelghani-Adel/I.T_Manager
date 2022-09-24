import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ticketActions } from "../../../Redux/ticketsSlice";
import classes from "./TicketDetails.module.css";
import { ticketChatActions } from "../../../Redux/ticketChatSlice";

const TicketDetails = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const ticketsState = useSelector((state) => state.tickets);
  const ticket = ticketsState.find((ticket) => ticket.id == params.id);
  const ticketChat = useSelector((state) => state.ticketChat);
  const chatObj = ticketChat.find((chat) => chat.id == params.id);

  const commentRef = useRef();

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const ticketDate = new Date(ticket.date);
  const curDate = new Date();
  const ticketAge = Math.round(Math.abs((ticketDate - curDate) / oneDay));

  const addNotehandler = () => {};

  const addCommentHandler = () => {
    const commentData = commentRef.current.value;
    const commentObj = {
      author: "user2",
      comment: commentData,
    };
    dispatch(
      ticketChatActions.addComment({ id: params.id, comment: commentObj })
    );
    commentRef.current.value = "";
  };

  const assignHandler = () => {
    const action = {
      ...ticket,
      assignedTo: "test",
    };
    dispatch(ticketActions.editTicket(action));
  };

  const closeHandler = () => {
    const action = {
      ...ticket,
      status: "closed",
    };
    dispatch(ticketActions.editTicket(action));
    history.goBack();
  };

  return (
    <div className={`${classes.container} col-10 m-auto p-4`}>
      <div className="row bg-white mb-2">
        <div className="col-1 text-center d-flex align-items-center">
          <img src={`${ticket.avatar}`} alt="" className={classes.avatar} />
        </div>
        <div className="col-11">
          <p className="fw-bold fs-4 mb-0">{ticket.subject}</p>
          <p className="mb-0 text-muted">
            Reported on {ticket.date} at {ticket.time}{" "}
            <span className="fw-bold">({ticketAge} days ago)</span>
          </p>
          <p className="text-muted">Assigned to : {ticket.assignedTo}</p>
        </div>
      </div>

      <div className="row bg-white p-2 mb-2">
        <div className="col">
          <button onClick={addNotehandler}>
            <i className="bi bi-sticky me-2"> Add Note</i>
          </button>
          <button onClick={assignHandler}>
            <i className="bi bi-chat me-2"> Assign to</i>
          </button>
          <button onClick={closeHandler}>
            <i className="bi bi-x-square me-2"> Mark as closed</i>
          </button>
        </div>
      </div>

      <div className="row bg-white p-2 mb-2">
        <p>
          <strong>Description: </strong>
          {ticket.description}
        </p>
      </div>

      <div className="row bg-white p-2">
        <h3 className="text-center fw-bold">Discussion</h3>
        {chatObj &&
          chatObj.chat.map((chat) => (
            <div
              key={Math.random()}
              className="d-flex justify-content-between bg-light border align-items-center mb-2 cursor--pointer"
            >
              <p>{chat.comment}</p>
              <p>{chat.author}</p>
            </div>
          ))}

        <div className="input-group mb-3">
          <input
            type="text"
            ref={commentRef}
            className="form-control"
            placeholder="Write a comment"
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={addCommentHandler}
          >
            comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
