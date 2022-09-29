import { useDispatch } from "react-redux";
import { softwareActions } from "../../../../Redux/slices/softwareSlices";

const DetailsActions = (props) => {
  const dispatch = useDispatch();
  const renewHandler = () => {
    dispatch(softwareActions.renewSoftware(props.software.id));
  };
  return (
    <div className="p-2 mb-2 bg-white text-center rounded">
      <h4 className="fw-bold">Actions</h4>
      <button className="btn btn-success" onClick={renewHandler}>
        Renew
      </button>
      <button className="btn btn-success">Visit Site</button>
      <button className="btn btn-success">Update Key</button>
    </div>
  );
};

export default DetailsActions;
