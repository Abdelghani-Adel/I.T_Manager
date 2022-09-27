const SubmitAction = (props) => {
  return (
    <div className="row">
      <div className="col-3 ms-auto p-2">
        <button
          className="btn btn-success w-100"
          role="submit"
          onClick={props.submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitAction;
