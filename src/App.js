import MainHeader from "./Components/MainHeader/MainHeader";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppWrapper from "./Components/UI/Wrapper/AppWrapper";
import RenderRoutes from "./Routes/RenderRoutes";
import ROUTES from "./Routes/Routes";

function App() {
  return (
    <AppWrapper>
      <Sidebar className="col-2" />
      <div className="col-10">
        <MainHeader className="row" />
        <RenderRoutes routes={ROUTES} />
      </div>
    </AppWrapper>
  );
}

export default App;
