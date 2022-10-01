import SubNavItem from "./SubNavItem";
import classes from "./SubNav.module.css";

const SubNav = (props) => {
  return (
    <div className="col-12 mb-2">
      <nav className={`navbar navbar-light border bg-secondary rounded`}>
        <ul className={`navbar-nav ${classes.navbarNav}`}>
          {props.links.map((link) => {
            const splitResult = link.split("/");
            const title = splitResult[splitResult.length - 1];
            return (
              <SubNavItem key={link} path={link.toLowerCase()} title={title} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
