import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Portal from "../../../../Components/UI/Portal";
import { softwareActions } from "../../../../Redux/slices/softwareSlices";

const DetailsActions = (props) => {
  const dispatch = useDispatch();

  // Portal Preparing
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => setPortalIsShown(true);
  const hidePortal = () => setPortalIsShown(false);

  // updating software license key
  const inputRef = useRef();
  const updateKeyHandler = () => {
    // preparing the action
    const action = {
      id: props.software.id,
      licenseKey: inputRef.current.value,
    };
    // validation and dispatching
    if (inputRef.current.value.trim().length > 0) {
      dispatch(softwareActions.editSoftware(action));
    }
    // heading away
    hidePortal();
  };

  const renewHandler = () => {
    dispatch(softwareActions.renewSoftware(props.software.id));
  };

  // Portaled component
  const UpdateKey = (props) => {
    return (
      <div className="modal-overlay p-2 rounded bg-white w-25">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={inputRef}
          />
          <label>Enter the new key</label>
        </div>
        <button className="btn btn-success" onClick={updateKeyHandler}>
          update
        </button>
      </div>
    );
  };

  return (
    <div className="p-2 mb-2 bg-white text-center rounded">
      {portalIsShown && (
        <Portal closePortal={hidePortal} component={<UpdateKey />} />
      )}
      <h4 className="fw-bold">Actions</h4>
      <div className="d-flex justify-content-evenly w-50 m-auto">
        <button className="btn btn-success" onClick={renewHandler}>
          Renew
        </button>
        <Link
          to={{ pathname: `${props.software.website}` }}
          target="_blank"
          className="btn btn-success"
        >
          Visit Site
        </Link>
        <button className="btn btn-success" onClick={showPortal}>
          Update Key
        </button>
      </div>
    </div>
  );
};

export default DetailsActions;
