import { Redirect } from "react-router-dom";
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
    component: () => <h1>Dashbaord</h1>,
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
        path: "/tickets",
        key: "tickets-page",
        exact: true,
        component: () => <Redirect to="/tickets/dashboard" />,
      },
    ],
  },
];

export default ROUTES;
