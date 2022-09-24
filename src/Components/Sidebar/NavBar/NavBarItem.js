import { NavLink } from "react-router-dom";

const NavBarItem = (props) => {
  return (
    <li className="nav-item d-flex align-items-center fs-5">
      <i
        className={`bi bi-${props.icon} me-3 ms-3 text-secondary d-none d-lg-block`}
      ></i>
      <NavLink activeClassName="active" className="nav-link" to={props.path}>
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavBarItem;
