import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Dashboard";
import Login from "./components/Login";
import LoginVerification from "./components/LoginVerification";
import Routes from "./constants/Routes";
import Welcome from "./components/Welcome";
import SetupSidechain from "./components/SetupSidechain";
import SetupSigningAuthority from "./components/SetupSigningAuthority";
import SetupTreasury from "./components/SetupTreasury";
import SetupMainnet from "./components/SetupMainnet";
import SetupInfura from "./components/SetupInfura";

const Router: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path={Routes.ROOT} component={Welcome} />
        <Route exact path={Routes.DASHBOARD} component={Home} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <Route
          exact
          path={Routes.LOGIN_VERIFICATION}
          component={LoginVerification}
        />
        <Route
          exact
          path={[Routes.SETUP, Routes.SETUP_SIDECHAIN]}
          component={SetupSidechain}
        />
        <Route
          exact
          path={Routes.SETUP_SIGNING_AUTHORITY}
          component={SetupSigningAuthority}
        />
        <Route exact path={Routes.SETUP_TREASURE} component={SetupTreasury} />
        <Route exact path={Routes.SETUP_MAINNET} component={SetupMainnet} />
        <Route exact path={Routes.SETUP_INFURA} component={SetupInfura} />
      </Switch>
    </Fragment>
  );
};

export default Router;
