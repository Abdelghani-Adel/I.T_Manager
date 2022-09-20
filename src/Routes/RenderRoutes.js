import { Route, Switch } from "react-router-dom";

function RouteWithSubRoute(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        return <route.component {...route} routes={route.routes} />;
      }}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoute key={i} {...route} />;
      })}
      <Route component={() => <h1>Page Not Found!</h1>} />
    </Switch>
  );
}

export default RenderRoutes;
