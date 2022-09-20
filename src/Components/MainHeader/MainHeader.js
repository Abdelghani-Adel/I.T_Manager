import SearchInput from "../UI/Input/SearchInput";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const searchHandler = () => {};
  return (
    <div
      className={`row bg-dark text-whtie align-items-center ${classes.mainHeader}`}
    >
      <div className="col-3">
        <SearchInput size="sm" color="primary" onClick={searchHandler} />
      </div>
    </div>
  );
};

export default MainHeader;
