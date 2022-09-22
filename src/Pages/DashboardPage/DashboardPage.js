import DashboardPageRoutes from "./DashboardRoutes";

const DashboardPage = (props) => {
  return (
    <div className="row">
      <div className="my-2">Dashboard</div>

      <DashboardPageRoutes routes={props.routes} />
    </div>
  );
};

export default DashboardPage;
