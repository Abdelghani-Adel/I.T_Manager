import { useRef } from "react";

const DescriptionInput = (props) => {
  const inputRef = useRef();
  const onBlurHandler = (e) => {
    const object = { description: e.target.value };
    props.onChange(object);
  };
  return (
    <div className="row mb-2">
      <label htmlFor="" className="col-sm-2 col-form-label">
        Description
      </label>
      <div className="col-sm-10">
        <textarea
          className="form-control"
          type="text"
          placeholder="Describe your problem."
          ref={inputRef}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};

export default DescriptionInput;
