import { React } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LOGIN_ROUTE, DASHBOARD_ROUTE } from "../routes";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ErrorComponent from "./ErrorComponent";

const Pages = ({ user, loggedIn, setLoggedIn }) => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to={LOGIN_ROUTE} />
        <Route path={LOGIN_ROUTE}>
          <Login user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path={DASHBOARD_ROUTE}>
          <Dashboard
            user={user}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="/error" component={ErrorComponent} />
        <Redirect from="*" to="/error" />
      </Switch>
    </>
  );
};

export default Pages;
