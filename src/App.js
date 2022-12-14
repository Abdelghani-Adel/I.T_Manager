import MainHeader from "./Components/MainHeader/MainHeader";
import NavBar from "./Components/NavBar/NavBar";
import AppWrapper from "./Components/UI/Wrapper/AppWrapper";
import RenderRoutes from "./Routes/RenderRoutes";
import ROUTES from "./Routes/Routes";

function App() {
  return (
    <AppWrapper>
      <NavBar className="col-12 col-lg-2" />
      <div className="col-12 col-lg-10">
        <MainHeader className="row d-none d-lg-flex" />
        <RenderRoutes routes={ROUTES} />
      </div>
    </AppWrapper>
  );
}

export default App;
