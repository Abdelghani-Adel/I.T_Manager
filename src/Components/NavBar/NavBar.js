import Logo from "../Logo/Logo";
import NavBarItem from "./NavBarItem";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav
      className={`${props.className} ${classes.navbar} navbar navbar-dark bg-dark align-content-start`}
    >
      <Logo />
      <ul className="navbar-nav flex-row flex-lg-column w-100 justify-content-around">
        <NavBarItem path="/dashboard" title="Dashboard" icon="grid" />
        <NavBarItem path="/tickets" title="Tickets" icon="stickies" />
        <NavBarItem path="/software" title="Software" icon="window" />
        <NavBarItem path="/inventory" title="Inventory" icon="window" />
        <NavBarItem path="/settings" title="Settings" icon="gear" />
      </ul>
    </nav>
  );
};

export default NavBar;
