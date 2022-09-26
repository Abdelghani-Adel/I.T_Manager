import { Redirect } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import TicketsReport from "../Pages/TicketsPage/components/Report/TicketsReport";
import TicketDetails from "../Pages/TicketsPage/TicketDetails/TicketDetails";
import TicketsByStatus from "../Pages/TicketsPage/TicketsByStatus/TicketsByStatus";
import TicketsDashboard from "../Pages/TicketsPage/TicketsDashboard/TicketsDahboard";
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
    ],
  },
  {
    path: "/assets",
    key: "assets-root",
    exact: false,
    component: () => <h1>Assets</h1>,
    routes: [],
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
        component: (props) => <TicketsByStatus {...props} />,
      },
      {
        path: "/tickets/ticket/:id",
        key: "ticket-details",
        exact: true,
        component: (props) => <TicketDetails {...props} />,
      },
    ],
  },
];

export default ROUTES;
