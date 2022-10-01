import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Portal from "../../../Components/Portal/Portal";
import TicketAssignPortal from "./TicketAssignPortal";
import TicketChat from "./TicketChat/TicketChat";
import TicketDescription from "./TicketDescription";
import TicketDetailsActions from "./TicketDetailsActions/TicketDetailsActions";
import TicketHeader from "./TicketHeader";

const TicketDetails = () => {
  const params = useParams();
  const ticketsState = useSelector((state) => state.tickets);
  const ticket = ticketsState.find((ticket) => ticket.id == params.id);
  const [portalIsShown, setPortalIsShown] = useState(false);

  const togglePortal = () => {
    setPortalIsShown(!portalIsShown);
  };

  // Storing the portal in a variable to keep the JSX organized
  const portal = portalIsShown && (
    <Portal
      closePortal={togglePortal}
      component={
        <TicketAssignPortal ticket={ticket} hidePortal={togglePortal} />
      }
    />
  );

  return (
    <React.Fragment>
      {portal}
      <div className="col-10 col-xl-8 m-auto p-2 mb-2 bg-secondary rounded">
        <TicketHeader ticket={ticket} />
        <TicketDetailsActions ticket={ticket} togglePortal={togglePortal} />
        <TicketDescription ticket={ticket} />
        <TicketChat ticket={ticket} />
      </div>
    </React.Fragment>
  );
};

export default TicketDetails;
