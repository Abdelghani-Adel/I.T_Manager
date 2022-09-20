import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <nav className="navbar navbar-dark">
      <ul className="navbar-nav w-100">
        <SideNavItem path="/dashboard" title="Dashboard" icon="grid" />
        <SideNavItem path="/assets" title="Assets" icon="window" />
        <SideNavItem path="/tickets" title="Tickets" icon="stickies" />
        <SideNavItem path="/inbox" title="Inbox" icon="chat-text" />
      </ul>
    </nav>
  );
};

export default SideNav;
