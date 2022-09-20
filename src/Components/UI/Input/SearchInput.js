import React from "react";

const SearchInput = (props) => {
  return (
    <div className={`input-group input-group-${props.size}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Looking for something ?"
      />
      <button
        className={`btn btn-${props.color}`}
        type="button"
        onClick={props.onClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
