import MainHeader from "./Components/MainHeader/MainHeader";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppWrapper from "./Components/UI/Wrapper/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <div className="col-10">
        <MainHeader />
      </div>
    </AppWrapper>
  );
}

export default App;
