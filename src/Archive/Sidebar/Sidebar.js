import Logo from "../../Components/Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Sidebar = (props) => {
  return (
    <div className={`${props.className} side-bar bg-dark text-white`}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Sidebar;
