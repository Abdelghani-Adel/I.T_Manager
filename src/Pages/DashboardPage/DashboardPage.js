import SubNav from "../../Components/SubNav/SubNav";
import DashboardPageRoutes from "./DashboardRoutes";

const DashboardPage = (props) => {
  return (
    <div className="row">
      <h2 className="my-2">Dashboard</h2>
      <SubNav links={["/dashboard/Tickets", "/dashboard/Inventory"]} />

      <DashboardPageRoutes routes={props.routes} />
    </div>
  );
};

export default DashboardPage;
