import { Redirect } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import TicketsReport from "../Pages/TicketsPage/components/Report/TicketsReport";
import TicketDetails from "../Pages/TicketsPage/TicketDetails/TicketDetails";
import TicketsFilterStatus from "../Pages/TicketsPage/TicketsFilter/TicketsFilterStatus";
import TicketsDashboard from "../Pages/TicketsPage/TicketsDashboard/TicketsDahboard";
import TicketsPage from "../Pages/TicketsPage/TicketsPage";
import NewTicket from "../Pages/TicketsPage/NewTicket/NewTicket";
import AssetsPage from "../Pages/AssetsPage/AssetsPage";
import AssetsDashboard from "../Pages/AssetsPage/AssetsDashboard/AssetsDashboard";
import AssetsSoftware from "../Pages/AssetsPage/AssetsSoftware/AssetsSoftware";
import SoftwareDetails from "../Pages/AssetsPage/AssetsSoftware/SoftwareDetails/SoftwareDetails";

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
    path: "/assets",
    key: "assets-root",
    exact: false,
    component: (props) => <AssetsPage {...props} />,
    routes: [
      {
        path: "/assets",
        key: "assets-page",
        exact: true,
        component: () => <Redirect to="/assets/dashboard" />,
      },
      {
        path: "/assets/dashboard",
        key: "assets-dashboard",
        exact: true,
        component: (props) => <AssetsDashboard {...props} />,
      },
      {
        path: "/assets/software",
        key: "assets-software",
        exact: true,
        component: (props) => <AssetsSoftware {...props} />,
      },
      {
        path: "/assets/software/details/:id",
        key: "software-singular",
        exact: true,
        component: (props) => <SoftwareDetails {...props} />,
      },
    ],
  },
];

export default ROUTES;
