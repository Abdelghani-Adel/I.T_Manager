import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ticketActions } from "../../../../Redux/slices/ticketsSlice";
import TicketComment from "./TicketComment";

const TicketChat = (props) => {
  const dispatch = useDispatch();
  const commentRef = useRef();

  const addCommentHandler = () => {
    const commentData = commentRef.current.value;
    const commentObj = {
      author: "user2",
      comment: commentData,
    };
    dispatch(
      ticketActions.addComment({ id: props.ticket.id, comment: commentObj })
    );
    commentRef.current.value = "";
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addCommentHandler();
    }
  };

  return (
    <div className="rounded bg-white p-2">
      <h3 className="text-center fw-bold">Discussion</h3>
      <div className="bg-light border border-secondary rounded p-2 mb-2">
        {props.ticket.chat.map((chat) => (
          <TicketComment key={Math.random()} chat={chat} />
        ))}
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          ref={commentRef}
          className="form-control"
          placeholder="Write a comment"
          onKeyDown={enterHandler}
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
  );
};

export default TicketChat;
