import { useState } from "react";
import Portal from "../../Components/UI/Portal";
import ReportCustom from "./components/Report/ReportCustom";
import TicketsPageRoutes from "./TicketsRoutes";

const TicketsPage = (props) => {
  const [reportCustomIsShown, setReportCustomIsShown] = useState(false);
  const showReportCustom = () => {
    setReportCustomIsShown(true);
  };
  const hideReportCustom = () => {
    setReportCustomIsShown(false);
  };
  return (
    // START FIXED CONTENT
    <div className="row g-2">
      {reportCustomIsShown && (
        <Portal
          closePortal={hideReportCustom}
          component={<ReportCustom onClosePortal={hideReportCustom} />}
        />
      )}
      <h2 className="mb-2 fs-sm-1 fs-md-6">Tickets</h2>
      <div className="actions mb-2">
        <button className="btn btn-success" role="button">
          New Ticket
        </button>
        <button
          className="btn btn-info border border-primary fw-bold"
          role="button"
          onClick={showReportCustom}
        >
          Tickets Report
        </button>
      </div>
      {/* END FIXED CONTENT */}

      {/* 
        // Default route is '/tickets/dashboard'
        // Default route component is <TicketsDashboard />
      */}

      <TicketsPageRoutes routes={props.routes} />
    </div>
  );
};

export default TicketsPage;
