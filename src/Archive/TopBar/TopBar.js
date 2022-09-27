import Brand from "../../Components/Logo/Logo";
import NavBar from "../Sidebar/NavBar/NavBar";

const TopBar = (props) => {
  return (
    <nav class={`${props.className} navbar navbar-light bg-dark`}>
      <div class="container-fluid">
        <Brand />

        <div class="collapse navbar-collapse">
          <NavBar />
          {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
