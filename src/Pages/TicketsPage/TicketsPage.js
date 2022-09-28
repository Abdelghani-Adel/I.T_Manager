import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="row g-2 overflow-auto">
      {portalIsShown && (
        <Portal
          closePortal={hidePortal}
          component={<ReportPreparation onClosePortal={hidePortal} />}
        />
      )}
      <h2 className="mb-2 fs-sm-1 fs-md-6">Tickets</h2>
      <div className="actions mb-2">
        <Link
          className="btn btn-success me-2 text-white text-decoration-none"
          to="/tickets/add"
        >
          New Ticket
        </Link>

        <button className="btn btn-success" onClick={showPortal}>
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
