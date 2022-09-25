import classes from "./TicketComment.module.css";

const TicketComment = (props) => {
  return (
    <div className={`${classes.comment}`}>
      <div>
        <img
          src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
          alt=""
          className={classes.avatar}
        />
      </div>
      <div>
        <p className={classes.author}>{props.chat.author}</p>
        <p className={classes.text}>{props.chat.comment}</p>
      </div>
    </div>
  );
};

export default TicketComment;
