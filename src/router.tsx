import React, { ReactNode } from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import { History } from 'history';
import IndexPage from './routes/IndexPage';
import Test from './routes/Test';

import { RouteConfig } from './interface';



const getRouteComponent = (path: string) => 111;


const createRoute = (routes: RouteConfig[]) => {
  routes.forEach((route: RouteConfig, index: number) => {
    return (
      <Route path={route.path} exact component={a} />
    );
  });
}

function RouterConfig({ history }: { history: History }): ReactNode {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
