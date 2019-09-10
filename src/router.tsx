import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { DvaInstance } from 'dva';
import { History } from 'history';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';
// import Test from './routes/Test';

// import { RouteConfig } from './interface';



// const getRouteComponent = (path: string) => 111;

// const createRoute = (app: DvaInstance, routes: RouteConfig[]) => {
//   routes.forEach((route: RouteConfig, index: number) => {
//     const curComponent = dynamic({
//       app,
//       models: () => [
//         import(`./models/${global}`),
//       ],
//       component: () => import(`./routes/${route.component}`),
//     });
//     return (
//       <Route path={route.path} exact component={curComponent} key={index} />
//     );
//   });
// }

function RouterConfig({ history, app }: { history: History; app: DvaInstance }): JSX.Element {
  const TestComponent = dynamic({
    app,
    models: () => [
      import('./models/global'),
    ],
    component: () => import('./routes/Test'),
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={TestComponent} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
