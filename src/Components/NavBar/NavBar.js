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
        <NavBarItem path="/assets" title="Assets" icon="window" />
        <NavBarItem path="/tickets" title="Tickets" icon="stickies" />
        <NavBarItem path="/inbox" title="Inbox" icon="chat-text" />
        <NavBarItem path="/reports" title="Reports" icon="file-earmark-text" />
      </ul>
    </nav>
  );
};

export default NavBar;
