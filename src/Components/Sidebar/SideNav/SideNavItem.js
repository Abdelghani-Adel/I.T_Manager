import { NavLink } from "react-router-dom";

const SideNavItem = (props) => {
  return (
    <li className="nav-item d-flex align-items-center fs-5">
      <i className={`bi bi-${props.icon} me-3 ms-3`}></i>
      <NavLink activeClassName="active" className="nav-link" to={props.path}>
        {props.title}
      </NavLink>
    </li>
  );
};

export default SideNavItem;
