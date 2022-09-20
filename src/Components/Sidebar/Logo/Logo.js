import { Link } from "react-router-dom";
import classes from "./Logo.module.css";
import brand from "../../../Assets/Images/Brand.png";

const Logo = (props) => {
  return (
    <div className={`brand text-center ${classes.logo}`}>
      <Link to="/">
        <img src={brand} className="h-100" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
