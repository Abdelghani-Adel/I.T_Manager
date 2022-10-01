import { Redirect } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import NewSoftware from "../Pages/SoftwarePage/NewSoftware/NewSoftware";
import SoftwareDashboard from "../Pages/SoftwarePage/SoftwareDashboard/SoftwareDashboard";
import SoftwareDetails from "../Pages/SoftwarePage/SoftwareDetails/SoftwareDetails";
import SoftwarePage from "../Pages/SoftwarePage/SoftwarePage";
import TicketsReport from "../Pages/TicketsPage/components/Report/TicketsReport";
import NewTicket from "../Pages/TicketsPage/NewTicket/NewTicket";
import TicketDetails from "../Pages/TicketsPage/TicketDetails/TicketDetails";
import TicketsDashboard from "../Pages/TicketsPage/TicketsDashboard/TicketsDahboard";
import TicketsFilterStatus from "../Pages/TicketsPage/TicketsFilter/TicketsFilterStatus";
import TicketsPage from "../Pages/TicketsPage/TicketsPage";

const ROUTES = [
  {
    path: "/",
    key: "app-root",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
  {
    path: "/dashboard",
    key: "dashboard",
    exact: false,
    component: (props) => <DashboardPage {...props} />,
    routes: [
      {
        path: "/dashboard",
        key: "dashboard-root",
        exact: true,
        component: () => <Redirect to="/dashboard/tickets" />,
      },
      {
        path: "/dashboard/tickets",
        key: "dashboard-tickets",
        exact: true,
        component: (props) => <TicketsDashboard {...props} />,
        routes: [],
      },
      {
        path: "/dashboard/software",
        key: "dashboard-tickets",
        exact: true,
        component: (props) => <SoftwareDashboard {...props} />,
      },
    ],
  },
  {
    path: "/tickets",
    key: "tickets",
    exact: false,
    component: (props) => <TicketsPage {...props} />,
    routes: [
      {
        path: "/tickets/report",
        key: "tickets-report",
        exact: true,
        component: (props) => <TicketsReport {...props} />,
      },
      {
        path: "/tickets/add",
        key: "add-ticket",
        exact: true,
        component: (props) => <NewTicket {...props} />,
      },
      {
        path: "/tickets",
        key: "tickets-page",
        exact: true,
        component: () => <Redirect to="/tickets/dashboard" />,
      },
      {
        path: "/tickets/dashboard",
        key: "tickets-dashboard",
        exact: true,
        component: (props) => <TicketsDashboard {...props} />,
      },
      {
        path: "/tickets/:status",
        key: "tickets-filter-status",
        exact: true,
        component: (props) => <TicketsFilterStatus {...props} />,
      },
      {
        path: "/tickets/ticket/:id",
        key: "ticket-details",
        exact: true,
        component: (props) => <TicketDetails {...props} />,
      },
    ],
  },
  {
    path: "/software",
    key: "software-root",
    exact: false,
    component: (props) => <SoftwarePage {...props} />,
    routes: [
      {
        path: "/software",
        key: "software-page",
        exact: true,
        component: () => <Redirect to="/software/dashboard" />,
      },
      {
        path: "/software/dashboard",
        key: "assets-software",
        exact: true,
        component: (props) => <SoftwareDashboard {...props} />,
      },
      {
        path: "/software/details/:id",
        key: "software-singular",
        exact: true,
        component: (props) => <SoftwareDetails {...props} />,
      },
      {
        path: "/software/add",
        key: "new-software",
        exact: true,
        component: (props) => <NewSoftware {...props} />,
      },
    ],
  },
];

export default ROUTES;
