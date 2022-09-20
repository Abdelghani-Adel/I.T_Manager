import Logo from "./Logo/Logo";
import SideNav from "./SideNav/SideNav";

const Sidebar = (props) => {
  return (
    <div className="col-2 bg-dark text-white">
      <Logo />
      <SideNav />
    </div>
  );
};

export default Sidebar;
