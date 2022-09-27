import { useState } from "react";
import Portal from "../../Components/UI/Portal";
import ReportPreparation from "./components/Report/ReportPreparation/ReportPreparation";
import TicketsPageRoutes from "./TicketsRoutes";

const TicketsPage = (props) => {
  const [portalIsShown, setPortalIsShown] = useState(false);
  const showPortal = () => {
    setPortalIsShown(true);
  };
  const hidePortal = () => {
    setPortalIsShown(false);
  };
  return (
    // START FIXED CONTENT
    <div className="row g-2">
      {portalIsShown && (
        <Portal
          closePortal={hidePortal}
          component={<ReportPreparation onClosePortal={hidePortal} />}
        />
      )}
      <h2 className="mb-2 fs-sm-1 fs-md-6">Tickets</h2>
      <div className="actions mb-2">
        <button className="btn btn-success">New Ticket</button>
        <button
          className="btn btn-info border border-primary fw-bold"
          onClick={showPortal}
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
