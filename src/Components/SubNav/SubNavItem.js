import { NavLink } from "react-router-dom";
import classes from "./SubNavItem.module.css";

const SubNavItem = (props) => {
  return (
    <li className="nav-item mx-2">
      <NavLink
        to={props.path}
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default SubNavItem;
