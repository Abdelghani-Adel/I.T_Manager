import { useRef } from "react";

const SubjectInput = (props) => {
  const inputRef = useRef();
  const onBlurHandler = (e) => {
    const object = { subject: e.target.value };
    props.onChange(object);
  };
  return (
    <div className="row mb-2">
      <label htmlFor="" className="col-sm-2 col-form-label">
        Subject
      </label>
      <div className="col-sm-10">
        <input
          className="form-control"
          type="text"
          placeholder="Enter the subject"
          ref={inputRef}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};

export default SubjectInput;
