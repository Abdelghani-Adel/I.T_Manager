import Logo from "./Logo/Logo";
import SideNav from "./SideNav/SideNav";

const Sidebar = (props) => {
  return (
    <div className={`${props.className} bg-dark text-white`}>
      <Logo />
      <SideNav />
    </div>
  );
};

export default Sidebar;
